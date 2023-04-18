<template>
   <div>
      <div class="flex flex-col space-y-1  divide-y justify-center">
         <div class="p-2 flex space-x-2 items-center" v-for="c in selectedTable?.columns" :key="c.id">
            <input type="checkbox" v-model="checked" :value="c.name" class="checkbox checkbox-xs " /> 
            <div class="text-gray-600">{{ c.name }}</div>
         </div>
      </div>
   </div>
</template>

<script setup>
import {defineProps, ref, watch, defineEmits} from 'vue'
const props    = defineProps(["item","selectedTable"])
const emits    = defineEmits(["columns"])
const checked  = ref(props?.item?.selected ? [...props?.item?.selected] : [])


watch(checked, (currentChecked) => {
   emits('columns', currentChecked)
}, {deep: true, immediate: true})


// onMounted(() => setCheckedEmit())


</script>