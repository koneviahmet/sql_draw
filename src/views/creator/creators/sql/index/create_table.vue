<template>
    <!-- https://www.npmjs.com/package/codemirror-editor-vue3 -->
    <div>
       create table {{ selectedTable }}

    </div>
</template>

<script setup>
import {ref, defineProps, onMounted} from 'vue'

const props = defineProps(["tables", "selectedTable"])





</script>

