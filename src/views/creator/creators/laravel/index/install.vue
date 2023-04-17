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
        text: 'Laravel Kurulumu'
    },
    {
        type: 'paragraf',
        text: 'yeni laravel projesi oluşturmak için aşağıdaki komut kullanılabilir. komudu kullanmak için laraveli globale kurmak gerekir. '
    },
    {
        type: 'bash',
        text: 'laravel new proje-adi'
    },
    {
        type: 'paragraf',
        text: 'composer kullanarak yeni proje oluşturmak için aşağıdaki bash kullanılabilir.'
    },
    {
        type: 'bash',
        text: 'composer create-project --prefer-dist laravel/laravel proje-adi'
    },
    {
        type: 'paragraf',
        text: 'Projeyi ayağa kaldırmak için aşağıdaki komutu kullanabiliriz.'
    },
    {
        type: 'bash',
        text: 'php artisan serve'
    }
]




</script>