<template>
  <div class="my-24 mx-3  bg-base-100 min-h-screen shadow-sm rounded-md">
      {{ tableData }}      
      <button class="btn" @click="addTableFNC">add</button>

      <div class="overflow-x-auto p-4">
        <table class="table w-full">
          <thead>
            <tr>
              <th>ITEM</th> 
              <th>OPTIONS</th>
            </tr>
          </thead> 
          <tbody>
            <tr v-for="item in tableData" :key="item.id">
              <th>{{item.id}}</th> 
              <td class="flex space-x-1">
                <a class="btn btn-error btn-sm" @click="itemDelete(item)" :class="tableLoading && 'loading btn-disabled'">Delete</a>    
                <a class="btn btn-error btn-sm" @click="updateTableFNC(item)" :class="tableLoading && 'loading btn-disabled'">Update</a>    
                <a class="btn btn-error btn-sm" @click="getTableFNC(item.id)" :class="tableLoading && 'loading btn-disabled'">Get</a>    
              </td> 
            </tr>
          </tbody>
        </table>
      </div>
      
  </div>
</template>


<script setup>

import formCreate from "./components/form/create.vue";
import {ref, onMounted} from 'vue'
import useTable from '../../compositions/useModelTable'

const {tableLoading, tableData, tableError, getTables, getTable, addTable, updateTable, deleteTable} = useTable();

onMounted(() => getTables())

const tables = ref(
  {
    dbase_id: 1,
    tables: [{
    dbase_id: 1,
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
  }]
  }
)


const addTableFNC = () => {
  addTable(tables.value)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const updateTableFNC = (item) => {
  updateTable({id:item.id,...tables.value})
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const itemDelete = (item) => {
  deleteTable(item)
};

const getTableFNC = (id) => {
  getTable({ dbase_id: id })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

</script>

