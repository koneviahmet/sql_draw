<template>
   <h1 class="font-bold text-lg px-2 mb-2 border-b  border-red-300 bg-red-100">{{item.text}}</h1>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps(["item"])




</script>