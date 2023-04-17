<template>
   <div class="bg-gray-600 text-white p-2 my-6">
      <div class="flex justify-between">
         <div></div>
         <Copy :text="item.text" />     
      </div>
      <div class="text-sm">
         {{item.text}}
      </div>

      
   </div>

</template>

<script setup>
import {defineProps} from 'vue'
import Copy from '../other/Copy.vue';
const props = defineProps(["item"])




</script>