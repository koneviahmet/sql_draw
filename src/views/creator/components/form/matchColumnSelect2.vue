<template>
    <div class="flex flex-col w-full justify-between">
        <div class="text-gray-600 w-full flex justify-between">
            <div class="font-bold"># {{ item.name }}</div>
            <button class="btn btn-sm" @click="isShow = !isShow">{{ isShow ? 'Göster':'Gizle' }}</button>
        </div>

        <div class="flex flex-col v-full" v-show="!isShow">
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
const isShow = ref(true)

watch(checked, (currentChecked) => {
    if (currentChecked) {
        emit("checked", {name: props.item.name, checked: currentChecked});
    }
}, {immediate: true})

</script>