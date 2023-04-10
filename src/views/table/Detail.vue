<template>
  <div class="my-24 mx-3  bg-base-100 min-h-screen shadow-sm rounded-md">
    <MainMenu v-can="'isAuth'" />
    loading: {{ tableLoading }} <br />
    <hr class="my-2">
    select data: {{ selectData }} <br /> 
    <hr class="my-2">
    all data from store: {{ tableData }} <br />
    <hr class="my-2">
    usersError: {{ tableError }} <br />
  </div>
</template>

<script setup>
import MainMenu from "./components/menu/MainMenu.vue";
import { useRoute } from "vue-router";
import {ref} from "vue"
const route = useRoute();
const selectData = ref(null);

import useTable from "../../compositions/useModelTable";
const { tableLoading, tableData, tableError, getTable } = useTable();
getTable({ id: route.params.id })
.then(response => {
  selectData.value = response;
})
.catch(error => console.log(error));
</script>

