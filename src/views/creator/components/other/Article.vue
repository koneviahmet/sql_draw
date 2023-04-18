<template>
    <div class="flex flex-col">
        <div v-for="i, key in article" :key="key">
            <Title :item="i" v-if="i.type == 'title'"/>
            <SubTitle :item="i" v-if="i.type == 'sub_title'"/>
            <Paragraph :item="i" v-if="i.type == 'paragraph'"/>
            <Code :lang="i?.lang" :code="i?.code" :height="i?.height"   v-if="i.type == 'code'" />
            <Bash :item="i" v-if="i.type == 'bash'"/>
            <SelectColumn :selectedTable="selectedTable" :item="i" @columns="setColumns" v-if="i.type == 'select_column'"/>
        </div>
    </div>

</template>

<script setup>
import {ref, defineProps, watch, defineEmits} from 'vue'
import Title from './Title.vue'
import SubTitle from './SubTitle.vue'
import Paragraph from './Paragraph.vue'
import Code from './Code.vue'
import Bash from './Bash.vue'
import SelectColumn from './SelectColumn.vue'
const props     = defineProps(["article", "selectedTable"])
const emit     = defineEmits(["columns"])


const setColumns = (columns) => {
    emit("columns", columns)
}


</script>