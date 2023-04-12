<template>
  <div class="my-24 mx-3 bg-base-100 min-h-screen shadow-sm rounded-md">
  <MainMenu v-can="'isAuth'" />

  <Skeletor :loading="creatorLoading" :length="4"/>

  <div class="alert alert-error my-4" v-if="creatorError">
    <div class="flex-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">    
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>                      
      </svg> 
      <label>{{creatorError}}</label>
    </div>
  </div>

  <div class="overflow-x-auto p-4">
    <table class="table w-full">
      <thead>
        <tr>
          <th>ITEM</th> 
          <th>OPTIONS</th>
        </tr>
      </thead> 
      <tbody>
        <tr v-for="item in creatorData" :key="item.id">
          <th>{{item.id}}</th> 
          <td class="flex space-x-1">
            <router-link :to="`/creator/detail/${item.id}`" class="btn btn-sm">Select</router-link>
            <a class="btn btn-error btn-sm" @click="itemDelete(item)" :class="creatorLoading && 'loading btn-disabled'">Delete</a>    
          </td> 
        </tr>
      </tbody>
    </table>
  </div>


  </div>
</template>

<script setup>
import { getCurrentInstance, reactive, onMounted } from "vue";
const app = getCurrentInstance();
import MainMenu from "./components/menu/MainMenu.vue";
import { notyfError, notyfSuccess } from "../../utils/notyf.js";
import Skeletor from "../../utils/skeletor/skeletor1.vue"

import useCreator from "../../compositions/useModelCreator";
const { creatorLoading, creatorData, creatorError, getCreators, deleteCreator } = useCreator();
onMounted(() => getCreators());

import Alert from "../../utils/alert.js";

const itemDelete = (item) => {
  deleteCreator(item)
};
</script>

