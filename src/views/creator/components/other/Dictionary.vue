<template>
   <div class="my-2 flex flex-col justify-center">
      
      <div v-for="d,key in item.dictionary" :key="key">
         <div class="flex space-x-2 px-2 items-center border-b py-2">
            <div class="font-bold text-sm">
               <h1 class="bg-gray-200 p-1 rounded-lg">{{ d[0] }}</h1>   
            </div>
            <div class="text-xs">
               {{ d[1] }}
            </div>
         </div>
      </div>

   </div>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps(["item"])


</script>