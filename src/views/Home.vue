<template>
  <div class="bg-base-100 min-h-screen overflow-hidden">

      <div class="flex">
        <!-- left menu -->
        <div class="min-h-screen relative" :class="isShowLeft ? 'w-6/12' : 'w-0 h-0'">
          <div class="bg-white absolute cursor-pointer top-0 right-0 -mr-6 z-50" @click="isShowLeft = !isShowLeft">
            <ChevronLeftIcon v-if="isShowLeft" class="w-6"/>
            <ChevronRightIcon v-else class="w-6"/>
          </div>

          <div class="flex justify-between p-2 border-b">
            <div></div>
            <div><button class="btn btn-sm" @click="addTable">Yeni Tablo</button></div>
          </div>

          <TablesMenu :tables="tables" :activeTableId="activeTableId" @active_table="activeTableId = $event"/>
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

          <div>
            asd
          </div>

        </div>

      </div>

  </div>

</template>


<script setup>
import {ref, onMounted, watch} from 'vue'
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/solid";
import Tables from "./table/Home.vue"
import TablesMenu from "./table/components/other/TablesMenu.vue"
import colors  from '../env/colors.js';
const data  = []
const isShowLeft = ref(false)
const isShowRight = ref(false)
const activeTableId = ref(0)
const selectedActiveTableId = ref(0)


onMounted(() => isShowLeft.value = true)
watch(activeTableId, (currentActiveTableId) => selectedActiveTableId.value = currentActiveTableId)

const tables = ref([
    {
      id: 1,
      name: "users",
      color: "red-200",
      opacity: '100',
      position: {top: 150, left: 200},
      columns: [
        {
          id: 1,
          name: "id",
          type: "bigint"
        },
        {
          id: 2,
          name: "name",
          type: "string"
        },
        {
          id: 3,
          name: "email",
          type: "string"
        }
      ]
    },
    {
      id: 2,
      name: "users2",
      color: "blue-200",
      opacity: '100',
      position: {top: 250, left: 500},
      columns: [
        {
          id: 1,
          name: "id",
          type: "bigint"
        },
        {
          id: 2,
          name: "name",
          type: "string"
        },
        {
          id: 3,
          name: "email",
          type: "string"
        },
        {
          id: 3,
          name: "users3_id",
          type: "string",
          color: "gray-500"
        }
      ]
    },
    {
      id: 3,
      name: "users3",
      color: "green-200",
      opacity: '100',
      position: {top: 400, left: 200},
      columns: [
        {
          id: 1,
          name: "id",
          index_types: 'primary_key',
          type: "bigint",
          nullable: false,
        },
        {
          id: 2,
          name: "name",
          type: "string",
          nullable: true,
        },
        {
          id: 3,
          name: "users_id",
          type: "string",
          nullable: false,
        },
        {
          id: 4,
          name: "users2_id",
          type: "string",
          nullable: false,
        },
        {
          id: 5,
          name: "email",
          type: "string",
          nullable: false,
        }
      ]
    }
])


const addTable = () => {
  console.log(colors[0]);
  let randomId = Math.floor(Math.random() * 100);
  let newTable =     {
      id: randomId,
      name: `table${randomId}`,
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
          type: "bigint"
        }
      ]
    }
  tables.value = [...tables.value, newTable]
}

</script>