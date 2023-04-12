<template>
    <div>
       migration {{ selectedTable }}
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
const props = defineProps(["tables", "selectedTable"])

</script>