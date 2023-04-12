<template>
  <div>

  <Skeletor :loading="dbaseLoading" :length="4"/>

  <div class="alert alert-error my-4" v-if="dbaseError">
    <div class="flex-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">    
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>                      
      </svg> 
      <label>{{dbaseError}}</label>
    </div>
  </div>

  <div class="overflow-x-auto p-4">
    <table class="table w-full">
      <tbody>
        <tr v-for="item in dbaseData" :key="item.id">
          <th class="w-full">
            <router-link :to="`/table/${item.id}`">{{item.id}} {{item.name}}</router-link>
          </th> 

          <td class="flex space-x-1">
            <button  class="btn btn-sm" @click="selected(item.id)">Update</button>
            <a class="btn btn-error btn-sm" @click="itemDelete(item)" :class="dbaseLoading && 'loading btn-disabled'">Delete</a>    
          </td> 
        </tr>
      </tbody>
    </table>
  </div>


  </div>
</template>

<script setup>
import { getCurrentInstance, reactive, onMounted, defineEmits } from "vue";
import { notyfError, notyfSuccess } from "../../utils/notyf.js";
import Skeletor from "../../utils/skeletor/skeletor1.vue"
import Alert from "../../utils/alert.js";
import useDbase from "../../compositions/useModelDbase";
const { dbaseLoading, dbaseData, dbaseError, getDbases, deleteDbase } = useDbase();
const app = getCurrentInstance();
const emit = defineEmits(["id"])
onMounted(() => getDbases());


const selected = (id) => {
  emit("id", id)
}

const itemDelete = (item) => {
  deleteDbase(item)
};
</script>

