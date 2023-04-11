<template>
  <div class="bg-base-100 min-h-screen overflow-hidden">

      <div class="flex">
        <!-- left menu -->
        <div class="min-h-screen relative" :class="isShowLeft ? 'w-4/12' : 'w-0 h-0'">
          <div class="bg-white absolute cursor-pointer top-0 right-0 -mr-6 z-50" @click="isShowLeft = !isShowLeft">
            <ChevronLeftIcon v-if="isShowLeft" class="w-6"/>
            <ChevronRightIcon v-else class="w-6"/>
          </div>

          <div class="flex justify-between p-2 border-b">
            <div></div>
            <div><button class="btn btn-sm" @click="addTable">Yeni Tablo</button></div>
          </div>

          <TablesMenu :tables="tables" :activeTableId="activeTableId" @delete="deleteTable" @active_table="activeTableId = $event"/>
          <div class="h-48"></div>
        </div>
    
        <!--table content -->
        <div class="w-full min-h-screen bg-red-200">
          <Tables :tables="tables" @active_table="activeTableId = $event" :selectedActiveTableId="selectedActiveTableId"/>
        </div>

        <div class="min-h-screen relative  bg-white" :class="isShowRight ? 'w-2/12' : 'w-0 h-0'">
          <div class="bg-white absolute cursor-pointer top-0 left-0 -ml-6 z-50" @click="isShowRight = !isShowRight">
            <ChevronLeftIcon v-if="!isShowRight" class="w-6"/>
            <ChevronRightIcon v-else class="w-6"/>            
          </div>

          <!--right content-->
          <div>
            asd {{ activeTableId }}
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
const route = useRoute();
const table_id = route.params.id
const data  = []
const isShowLeft = ref(false)
const isShowRight = ref(false)
const activeTableId = ref(0)
const selectedActiveTableId = ref(0)


const tables = ref([
  {
    id: 1,
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
  }
])

onMounted(() => isShowLeft.value = true)
watch(activeTableId, (currentActiveTableId) => selectedActiveTableId.value = currentActiveTableId)
watch(tables, (currentTables) => {
  console.log("tables => değişti");
}, {deep: true});


const deleteTable = (id) => {
  tables.value = [...tables.value.filter(i => i.id != id)]
}


const addTable = () => {
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