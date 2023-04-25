<template>
    <div class="flex flex-col">
        <div v-for="i, key in article" :key="key">
            <Title :item="i" v-if="i.type == 'title'"/>
            <SubTitle :item="i" v-if="i.type == 'sub_title'"/>
            <Paragraph :item="i" v-if="i.type == 'paragraph'"/>
            <Code :lang="i?.lang" :code="i?.code" :height="i?.height"   v-if="i.type == 'code'" />
            <Bash :item="i" v-if="i.type == 'bash'"/>
            <SelectColumn :selectedTable="selectedTable" :item="i" @columns="setColumns" v-if="i.type == 'select_column'"/>
            <MatchColumn :selectedTable="selectedTable" :item="i" @columns="setMatchColumns" v-if="i.type == 'match_column'"/>
            <MatchColumn2 :selectedTable="selectedTable" :item="i" @columns="setMatchColumns2" v-if="i.type == 'match_column2'"/>
            <Dictionary :item="i" v-if="i.type == 'dictionary'"/>
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
import MatchColumn from './MatchColumn.vue'
import MatchColumn2 from './MatchColumn2.vue'
import Dictionary from './Dictionary.vue'


const props     = defineProps(["article", "selectedTable"])
const emit     = defineEmits(["columns", "match_columns", "match_columns2"])


const setColumns = (columns) => {
    emit("columns", columns)
}

const setMatchColumns = (columns) => {
    emit("match_columns", columns)
}

const setMatchColumns2 = (columns) => {
    emit("match_columns2", columns)
}


</script>