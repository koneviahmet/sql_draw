<template>
    <div class="p-3">
        <ul class="flex">
        <li class="mr-2" v-for="url in urlArr" :key="url.id">
            <router-link   class="inline-block border  rounded py-1 px-3 " :class='route.fullPath == url.to && "bg-blue-500 text-white"' :to="url.to">{{url.title}}</router-link>
        </li>
    </ul>
    </div>
</template>

<script setup>
    import {useRoute} from "vue-router";
    import {ref} from 'vue';
    const route = useRoute();
    const urlArr = ref([
        {
            id: 1,
            to: "/creator",
            title: "Creator Home Page"
        },
        {
            id: 2,
            to: "/creator/create",
            title: "Creator Create"
        },
        {
            id: 3,
            to: "/creator/update/1",
            title: "Creator Update"
        },
        {
            id: 4,
            to: "/creator/list",
            title: "Creator List"
        },
        {
            id: 5,
            to: "/creator/detail/1",
            title: "Creator Detail"
        },
        {
            id: 6,
            to: "/creator/search",
            title: "creator Search"
        }
    ])
</script>

