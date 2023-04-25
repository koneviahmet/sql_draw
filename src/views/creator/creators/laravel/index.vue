<template>
    <div>
        <controller :tables="tables" :selectedTable="selectedTable" v-if="sub_creator == 'controller'"/>
        <migration :tables="tables" :selectedTable="selectedTable" v-if="sub_creator == 'migration'"/>
        <install :tables="tables" :selectedTable="selectedTable" v-if="sub_creator == 'install'"/>
        <factory :tables="tables" :selectedTable="selectedTable" v-if="sub_creator == 'factory'"/>
        <models :tables="tables" :selectedTable="selectedTable" v-if="sub_creator == 'models'"/>
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
import controller from "./index/controller.vue"
import migration from "./index/migration.vue"
import install from "./index/install.vue"
import factory from "./index/factory.vue"
import models from "./index/models.vue"

const props = defineProps(["tables", "selectedTable", "sub_creator"])



</script>