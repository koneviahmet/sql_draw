<template>
    <div>
        <create_table :tables="tables" :selectedTable="selectedTable" v-if="sub_creator == 'create_table'"/>
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
import create_table from "./index/create_table.vue"
const props = defineProps(["tables", "selectedTable", "sub_creator"])

</script>