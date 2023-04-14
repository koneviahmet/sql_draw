<template>
<p class="text-sm text-gray-700 px-2">{{item.text}}</p>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps(["item"])




</script>