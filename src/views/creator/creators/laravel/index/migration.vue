<template>
    <div>
       <Article :article="article"/>
    </div>
</template>


<script setup>
import {ref, defineProps, computed} from 'vue'
import Article from '../../../components/other/Article.vue';
const props = defineProps(["tables", "selectedTable"])
const code  = ref(`var i = 5;`)

const article = [
    {
        type: 'title',
        text: 'Migration Nedir?'
    },
    {
        type: 'paragraf',
        text: 'Migration, veritabanı işlemlerinin yönetimini kolaylaştıran bir araçtır ve veritabanı tablolarının oluşturulması, değiştirilmesi veya silinmesi gibi işlemleri gerçekleştirmek için kullanılır.'
    },
    {
        type: 'code',
        code: code,
        lang: 'javascript',
        height: '52px'
    }
]




</script>