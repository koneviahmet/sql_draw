<template>
   <div>
      <div class="flex flex-col space-y-1  divide-y justify-center">
         <div class="p-2 flex space-x-2 items-center" v-for="c in selectedTable?.columns" :key="c.id">
            <!-- <input type="checkbox" v-model="checked" :value="c.name" class="checkbox checkbox-xs " />  -->
            <MatchColumnSelect2 :item="c" :selected="item.selected" :default_checked="getDefaultChecked(c.name)" @checked="checked = $event"/> 

         </div>
      </div>
   </div>
</template>

<script setup>
import {defineProps, ref, watch, defineEmits} from 'vue'
import MatchColumnSelect2 from '../form/matchColumnSelect2.vue';

const props    = defineProps(["item","selectedTable"])
const emits    = defineEmits(["columns"])
const checked  = ref(null)
const all_checked = ref([])



watch(checked, (currentChecked) => {
   if (currentChecked) {
      all_checked.value = [...all_checked.value.filter(i => i.name != currentChecked.name), currentChecked]
   }
}, {deep: true, immediate: true})


watch(all_checked, (currentChecked) => {
   emits('columns', currentChecked)
})



// onMounted(() => setCheckedEmit())

const getDefaultChecked = (name) => {
   let default_select = props.item?.default.filter(i => i.name.includes(name))?.[0]?.checked
   return default_select || null
}

</script>