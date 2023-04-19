<template>
<div class="my-4 mx-2">
   <div class="bg-gray-500 text-white p-2 rounded-lg">
      <div class="flex justify-between">
         <div></div>
         <Copy :text="item.text" />     
      </div>
      <div class="bg-white text-gray-800 text-xs p-2 mb-2 rounded-lg" v-if="item.description">
         {{ item.description }}
      </div>
      <div class="text-sm py-4 px-1">
         {{item.text}}
      </div>     
   </div>
</div>
</template>

<script setup>
import {defineProps} from 'vue'
import Copy from '../other/Copy.vue';
const props = defineProps(["item"])
</script>