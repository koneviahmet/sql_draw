<template>
    <div class="flex flex-col w-full justify-between">
        <div class="text-gray-600 w-full">{{ item.name }}</div>

        <div class="flex flex-col v-full">
            <div class="bg-gray-100 my-2 p-2"  v-for="s in selected" :key="s">
                <input type="checkbox" v-model="checked"  :value="s" class="checkbox checkbox-sm" /> {{ s }}
            </div>
        </div>

    </div>
</template>

<script setup>
import {ref, defineProps, watch, defineEmits, onMounted} from 'vue'

const props = defineProps(["item", "selected", "default_checked"])
const emit = defineEmits(["checked"])
const checked = ref(props?.default_checked || [])


watch(checked, (currentChecked) => {
    if (currentChecked) {
        emit("checked", {name: props.item.name, checked: currentChecked});
    }
}, {immediate: true})

</script>