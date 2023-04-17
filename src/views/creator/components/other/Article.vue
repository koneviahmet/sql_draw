<template>
    <div class="flex flex-col">
        <div v-for="i, key in article" :key="key">
            <Title :item="i" v-if="i.type == 'title'"/>
            <SubTitle :item="i" v-if="i.type == 'sub_title'"/>
            <Paragraf :item="i" v-if="i.type == 'paragraf'"/>
            <Code :lang="i?.lang" :code="i?.code" :height="i?.height"   v-if="i.type == 'code'" />
            <Bash :item="i" v-if="i.type == 'bash'"/>
            <!-- 
            <CodeEditor :lang="i.lang" :code="i.code" v-if="i.type == 'code_editor'"/>
            -->
        </div>
    </div>

</template>

<script setup>
import {ref, defineProps, watch} from 'vue'
import Title from './Title.vue'
import SubTitle from './SubTitle.vue'
import Paragraf from './Paragraf.vue'
import Code from './Code.vue'
import Bash from './Bash.vue'
const props = defineProps(["article"])





</script>