<template>
    <div>
        <controller :tables="tables" :selectedTable="selectedTable" v-if="sub_creator == 'controller'"/>
        <migration :tables="tables" :selectedTable="selectedTable" v-if="sub_creator == 'migration'"/>
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
import controller from "./index/controller.vue"
import migration from "./index/migration.vue"
const props = defineProps(["tables", "selectedTable", "sub_creator"])

</script>