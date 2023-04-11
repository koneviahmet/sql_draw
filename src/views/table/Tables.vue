<template>
  <div class=" bg-gray-300 h-full w-full fixed" ref="drag">
    <TableContent v-for="table in tables" :key="table.id" :content_size="{width, height}" :table="table" :z="z" :setZ="setZ"/>
  </div>
  </template>
  
  
  <script setup>
    import {ref, defineProps, defineEmits, onMounted, computed, watch} from "vue"
    import { useElementSize } from '@vueuse/core'
    import TableContent from "./components/other/table_content.vue"
    const props = defineProps(["tables","selectedActiveTableId"])
    const emit = defineEmits(["active_table"])
    const drag = ref(null)
    const tables = ref(props.tables)
    const { width, height } = useElementSize(drag)
    const z = ref(10)
    const activeTableId = ref(null)
  
    const setZ = (tableId) => {
      activeTableId.value = tableId
      emit("active_table", tableId)
      z.value++
      tablesFilter()
    }
  
    watch(props, (currentProps)=>{
      tables.value = [...props.tables]
    })
  
  
    watch(props, (currentProps)=>{
      if (currentProps.selectedActiveTableId != activeTableId.value) {
        activeTableId.value = currentProps.selectedActiveTableId
  
        tablesFilter()
      }
    })
  
  
  
    onMounted(() => tablesFilter())
    
    const tablesFilter = () => {
      return tables.value.map(i => {
        i.opacity = 100
        if (activeTableId.value) {
          i.opacity = 40
        }
        
        i.columns.map(x => {
          x.color = null
          // console.log(x.name, sub_name);
          if (x.name.includes("_id")) {
            const parent_table_name = x.name.replace(/_id/g, "");
            x.color = getTableColor(parent_table_name)
          }
  
          if(getActiveTable.value){
            const sub_id_name = `${getActiveTable.value}_id`
  
            if (sub_id_name == x.name || i.id == activeTableId.value) {
              i.opacity = 100
            }
          }
  
          return x
        })
  
        return i
      })
    }
  
    const getTableColor = (parent_table_name) => {
      return tables.value.filter(i => i.name == parent_table_name)[0]?.color || null
    }
  
    const getActiveTable = computed(() => {
      return tables.value.filter(i => i.id == activeTableId.value)[0]?.name || null
    })
  
  </script>