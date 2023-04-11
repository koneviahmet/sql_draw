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
            to: "/dbase",
            title: "Dbase Home Page"
        },
        {
            id: 2,
            to: "/dbase/create",
            title: "Dbase Create"
        },
        {
            id: 3,
            to: "/dbase/update/1",
            title: "Dbase Update"
        },
        {
            id: 4,
            to: "/dbase/list",
            title: "Dbase List"
        },
        {
            id: 5,
            to: "/dbase/detail/1",
            title: "Dbase Detail"
        },
        {
            id: 6,
            to: "/dbase/search",
            title: "dbase Search"
        }
    ])
</script>

