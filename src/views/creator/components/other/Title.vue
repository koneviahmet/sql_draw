<template>
   <h1 class="font-bold text-lg px-2 mb-4 border-b  border-gray-300 bg-gray-200">{{item.text}}</h1>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps(["item"])




</script>