<template>
    <div class="flex w-full justify-between">
        <div class="text-gray-600 w-full">{{ item.name }}</div>
        <select class="select select-sm select-bordered"  v-model="checked">
            <option v-for="s in selected" :key="s">{{ s }}</option>
        </select>
    </div>
</template>

<script setup>
import {ref, defineProps, watch, defineEmits, onMounted} from 'vue'

const props = defineProps(["item", "selected", "default_checked"])
const emit = defineEmits(["checked"])
const checked = ref(props?.default_checked || null)


watch(checked, (currentChecked) => {
    if (currentChecked) {
        emit("checked", {name: props.item.name, checked: currentChecked});
    }
}, {immediate: true})

</script>