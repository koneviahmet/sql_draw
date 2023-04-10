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
            to: "/table",
            title: "Table Home Page"
        },
        {
            id: 2,
            to: "/table/create",
            title: "Table Create"
        },
        {
            id: 3,
            to: "/table/update/1",
            title: "Table Update"
        },
        {
            id: 4,
            to: "/table/list",
            title: "Table List"
        },
        {
            id: 5,
            to: "/table/detail/1",
            title: "Table Detail"
        },
        {
            id: 6,
            to: "/table/search",
            title: "table Search"
        }
    ])
</script>

