<template>
  <div class="my-24 mx-3  bg-base-100 min-h-screen shadow-sm rounded-md">
    <MainMenu v-can="'isAuth'" />
    loading: {{ dbaseLoading }} <br />
    <hr class="my-2">
    select data: {{ selectData }} <br /> 
    <hr class="my-2">
    all data from store: {{ dbaseData }} <br />
    <hr class="my-2">
    usersError: {{ dbaseError }} <br />
  </div>
</template>

<script setup>
import MainMenu from "./components/menu/MainMenu.vue";
import { useRoute } from "vue-router";
import {ref} from "vue"
const route = useRoute();
const selectData = ref(null);

import useDbase from "../../compositions/useModelDbase";
const { dbaseLoading, dbaseData, dbaseError, getDbase } = useDbase();
getDbase({ id: route.params.id })
.then(response => {
  selectData.value = response;
})
.catch(error => console.log(error));
</script>

