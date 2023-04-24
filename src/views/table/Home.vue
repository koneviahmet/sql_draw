<template>
  <div class="bg-base-100 min-h-screen overflow-hidden">
      <div class="flex">
        <!-- left menu -->
        <div class="min-h-screen relative" :class="isShowLeft ? 'w-4/12' : 'w-0 h-0'">
          
          <div class="bg-white absolute cursor-pointer top-0 right-0 -mr-6 z-50 " @click="isShowLeft = !isShowLeft">
            <ChevronLeftIcon v-if="isShowLeft" class="w-6"/>
            <ChevronRightIcon v-else class="w-6"/>
          </div>

          <div class="flex justify-between p-2 border-b">
            <div><router-link class="btn btn-sm" to="/">Home</router-link></div>
            <div><button class="btn btn-sm" @click="addTableFNC">+Table</button></div>
          </div>

          <TablesMenu :tables="tables" :activeTableId="activeTableId" @delete="deleteTableFNC" @active_table="activeTableId = $event"/>
          <div class="h-48"></div>
          
        </div>
   
        <!--table content -->
        <div class="w-full min-h-screen bg-red-200">
          <Tables :tables="tables" @drag="dragFnc" @active_table="activeTableId = $event" :selectedActiveTableId="selectedActiveTableId"/>
        </div>

        <div class="min-h-screen relative  bg-white" :class="activeTableId && isShowRight ? 'w-full' : 'w-0 h-0'">
          <div class="bg-white absolute cursor-pointer top-0 left-0 -ml-6 z-50" @click="isShowRight = !isShowRight">
            <ChevronLeftIcon v-if="!isShowRight" class="w-6"/>
            <ChevronRightIcon v-else class="w-6"/>            
          </div>

          <!--right content-->
          <div>
            <Creator :activeTableId="activeTableId" :tables="tables" v-if="refresh"/>
          </div>

        </div>

      </div>

  </div>
</template>


<script setup>
import {ref, onMounted, watch} from 'vue'
import { useRoute } from "vue-router";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/solid";
import Tables from "./Tables.vue"
import TablesMenu from "./components/other/TablesMenu.vue"
import colors  from '../../env/colors.js';
import useTable from '../../compositions/useModelTable'
import Creator from '../creator/Home.vue'

const {tableLoading, tableData, tableError, getTables, getTable, addTable, updateTable, deleteTable} = useTable();

const route         = useRoute();
const dbase_id      = route.params.id
const isShowLeft    = ref(false)
const isShowRight   = ref(true)
const activeTableId = ref(0)
const selectedActiveTableId = ref(0)
const tables        = ref([]);
const db_id         = ref(null)
const refresh       = ref(true)


const newTables = ref({
    dbase_id: dbase_id,
    tables: [{
    dbase_id: 1,
    id: Math.floor(Math.random() * 100000),
    name: "table",
    color: "green-200",
    opacity: '100',
    position: {top: 200, left: 100},
    columns: [
      {
        id: 1,
        name: "id",
        index_types: 'primary_key',
        type: "bigint",
        nullable: false,
        auto_increment: true,
        unsigned: true,
        default_value: "",
        comment: ""
      }
    ]
  }]
  })


onMounted(() => {
  isShowLeft.value = true
  getTable({ dbase_id: dbase_id })
    .then(res => {
      if (res?.[0]) {
        db_id.value = res?.[0].id
        // console.log("var", res?.[0].tables);
        tables.value = [...res?.[0].tables]
      }else{
        // console.log("yok");
        addTable(newTables.value)
        .then(res => {
          db_id.value = res.id;
          tables.value = [...newTables.value?.tables]
        })
        .catch(err => console.log(err))
      }
    })
    .catch(err => console.log(err))
})


const dragFnc = (size) => {
  const activeIndex = tables.value.findIndex(i => i.id == activeTableId.value);
  tables.value[activeIndex].position = {top: size.top, left: size.left}
  // console.log("dragStop->");
}

watch(activeTableId, (currentActiveTableId) => {
  selectedActiveTableId.value = currentActiveTableId

  refresh.value = false
  setTimeout(() => refresh.value = true,100)
})


watch(tables, (currentTables) => {
  // console.log("tables => değişti");

  const updateTableObj = newTables.value
  updateTableObj.id = db_id.value
  updateTableObj.tables = currentTables

  updateTable(updateTableObj)
    .then(res => {
      // console.log(res)
    })
    .catch(err => console.log(err))

}, {deep: true});


const deleteTableFNC = (id) => {
  tables.value = [...tables.value.filter(i => i.id != id)]
}

const addTableFNC = () => {
  let randomId = Math.floor(Math.random() * 100);
  let newTable =     {
      id: randomId,
      name: `new_table`,
      color: colors[Math.floor(Math.random() * 54)],
      opacity: '100',
      position: {
        top: Math.floor(Math.random() * 600), 
        left: Math.floor(Math.random() * 800)
      },
      columns: [
        {
          id: randomId,
          name: "id",
          index_types: 'primary_key',
          type: "bigint",
          nullable: false,
          auto_increment: true,
          unsigned: true,
          default_value: "",
          comment: ""
        }
      ]
    }
  tables.value = [...tables.value, newTable]
}

</script>