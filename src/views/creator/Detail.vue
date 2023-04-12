<template>
  <div class="my-24 mx-3  bg-base-100 min-h-screen shadow-sm rounded-md">
    <MainMenu v-can="'isAuth'" />
    loading: {{ creatorLoading }} <br />
    <hr class="my-2">
    select data: {{ selectData }} <br /> 
    <hr class="my-2">
    all data from store: {{ creatorData }} <br />
    <hr class="my-2">
    usersError: {{ creatorError }} <br />
  </div>
</template>

<script setup>
import MainMenu from "./components/menu/MainMenu.vue";
import { useRoute } from "vue-router";
import {ref} from "vue"
const route = useRoute();
const selectData = ref(null);

import useCreator from "../../compositions/useModelCreator";
const { creatorLoading, creatorData, creatorError, getCreator } = useCreator();
getCreator({ id: route.params.id })
.then(response => {
  selectData.value = response;
})
.catch(error => console.log(error));
</script>

