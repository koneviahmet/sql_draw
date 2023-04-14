<template>
    <div>
        <button class="btn" @click="code = 'asd'">addCode</button>
        <Article :article="article" />
        <!-- <Code :lang="'javascript'" :code="code" :isRefresh="false" /> -->
            
    </div>
</template>

<script setup>
import {ref, defineProps, computed} from 'vue'
import Article from '../../../components/other/Article.vue';
import Code from '../../../components/other/Code.vue';
const props = defineProps(["tables", "selectedTable"])
const code = ref(`var i = 5;`)

const articlex = ref([
    {
        type: 'title',
        text: 'Bu bir Başlık'
    },
    {
        type: 'sub_title',
        text: 'Bu bir alt Başlık'
    },
    {
        type: 'paragraf',
        text: 'bu bir açıklama olacak'
    },
    {
        type: 'code',
        code: code.value,
        lang: 'javascript',
        height: '52px'
    }
])


const article = computed(() => {
    return [
        {
            type: 'title',
            text: 'Bu bir Başlık'
        },
        {
            type: 'sub_title',
            text: 'Bu bir alt Başlık'
        },
        {
            type: 'paragraf',
            text: 'bu bir açıklama olacak'
        },
        {
            type: 'code',
            code: code.value,
            lang: 'javascript',
            height: '52px'
        }
    ]
})






</script>