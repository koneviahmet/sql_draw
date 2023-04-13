<template>
  <div>
    <div class="flex p-2 bg-gray-200 justify-between space-x-2">
      <div class="w-full">
        <select class="select select-bordered select-sm w-full" v-model="creator">
          <option v-for="c in creators" :key="c.name">{{ c.name }}</option>
        </select>
      </div>
      <div class="w-full">       
        <select class="select select-bordered select-sm w-full" v-model="sub_creator">
          <option v-for="c in creators.filter(i => i.name == creator)[0].items" :key="c">{{ c }}</option>
        </select>
      </div>
    </div>

    <!-- creators -->
    <div>
      <Laravel :tables="tables" :selectedTable="selectedTable" :sub_creator="sub_creator" v-if="creator == 'laravel'"/>
      <Sql :tables="tables" :selectedTable="selectedTable" :sub_creator="sub_creator" v-if="creator == 'sql'"/>
    </div>

  </div>
</template>

<script setup>
import {ref, defineProps, computed, watch} from 'vue'
import creators from '../../env/creators.js'
import Laravel from './creators/laravel/index.vue'
import Sql from './creators/sql/index.vue'


const props = defineProps(["activeTableId", "tables"])
const creator = ref(creators[0].name)
const sub_creator = ref(creators.filter(i => i.name == creator.value)[0].items[0])

watch(creator, currentCreator => {
  sub_creator.value = creators.filter(i => i.name == creator.value)[0].items[0]
})

const selectedTable = computed(() => {
  const index = props.tables.findIndex(i => i.id == props.activeTableId)
  return  props.tables?.[index] || null
})
</script>


