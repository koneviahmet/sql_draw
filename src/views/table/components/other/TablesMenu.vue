<template>
<div class="relative h-full w-full">
  <div v-for="table in tables" :key="table.id" 

    :class="`border-l-4 border-${table.color}`"
    @click="setActiveTableId(table.id)"
  >
    <div class="flex justify-between items-center p-2 border-b hover:bg-gray-100 space-x-2 cursor-pointer">
      <div>
        <ChevronDownIcon class="w-5 text-gray-400" v-if="activeTableId == table.id"/>
        <ChevronUpIcon class="w-5 text-gray-400" v-else/>
      </div>
      <div class="w-full">
        <input type="text" placeholder="Table Name" v-model="table.name" @keyup.enter="editId = null" class="input input-bordered input-sm w-full" v-if="editId == table.id"/>
        <div v-else>{{table.name}}</div>
      </div>
      <div>
        <div class="hover:bg-gray-300 p-1" v-if="!editId" @click="editId = table.id">
            <PencilIcon class="w-4 text-gray-400"/>
          </div>
          <div class="hover:bg-gray-300 p-1" v-if="editId == table.id" @click="editId = null">
            <CheckIcon class="w-4 text-green-400"/>
          </div>
      </div>
      <div>
        <div class="dropdown dropdown-right">
          <div tabindex="0" class="hover:bg-gray-300 p-2">
            <DotsVerticalIcon class="w-4 text-gray-400"/>
          </div>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
    </div>

    <TableDetail :table="table" v-if="activeTableId == table.id"/>
  </div>


</div>
</template>


<script setup>
  import {ref, defineProps, onMounted, computed, watch, defineEmits} from "vue"
  import { ChevronDownIcon, ChevronUpIcon, DotsVerticalIcon, PencilIcon, CheckIcon} from "@heroicons/vue/solid";
  import TableDetail from './table_detail.vue'
  
  const props   = defineProps(["tables","activeTableId"])
  const emit    = defineEmits(["active_table"])
  const tables  = ref(props.tables)
  const editId  = ref(null)

  onMounted(() => tablesFilter())
  watch(props, ()=>{
    tables.value = [...props.tables]
  })


  const tablesFilter = () => {
    return tables.value.map(i => {
      i.opacity = 100
      if (props.activeTableId.value) {
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

          if (sub_id_name == x.name || i.id == props.activeTableId.value) {
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
    return tables.value.filter(i => i.id == props.activeTableId.value)[0]?.name || null
  })

  const setActiveTableId = (id) => {
    emit('active_table', id)
  }



</script>