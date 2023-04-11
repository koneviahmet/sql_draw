<template>
    <div class="bg-gray-50">
        <div class="flex justify-end space-x-1 p-2">
            <button class="btn btn-primary btn-sm" @click="addColumn">+Column</button>
        </div>
        <div class="flex flex-col divide-y">
            <div class="flex space-x-2 justify-between items-center p-2" v-for="c in table.columns" :key="c.id">
                <!--name-->
                <div class="min-w-1/2">
                    <input type="text" placeholder="Column Name" v-model="c.name" class="input input-bordered input-sm w-full" />
                </div>

                <!--type-->
                <div>
                    <select class="select select-bordered select-sm w-full" v-model="c.type">
                        <option v-for="t in types" :key="t">{{t}}</option>
                    </select>    
                </div>
                <!--nullable-->
                <div>
                    <input type="checkbox" class="tooltip checkbox checkbox-xs" data-tip="nullable" v-model="c.nullable" />
                </div>
                
                <!--index type-->
                <div>
                    <select class="select select-bordered select-sm w-full" v-model="c.index_types">
                        <option v-for="t in IndexTypes" :key="t">{{t}}</option>
                    </select> 
                </div>

                <!--other opt-->
                <div class="dropdown dropdown-right dropdown-center dropdown-openx">
                    <div tabindex="0" class="bg-gray-100 p-1 hover:bg-gray-200 cursor-pointer">
                        <DotsHorizontalIcon class="w-4"/>
                    </div>
                    <div tabindex="0" class="flex flex-col space-y-4 dropdown-content menu p-4 shadow bg-base-100 rounded-box w-80">
                        <!--auto increment-->
                        <div class="flex space-x-2 items-center text-sm text-gray-500">
                            <input type="checkbox" class="checkbox checkbox-xs" v-model="c.auto_increment" />
                            <p>Auto increment</p>
                        </div>

                        <!--unsigned-->
                        <div class="flex space-x-2 items-center text-sm text-gray-500">
                            <input type="checkbox" class="checkbox checkbox-xs" v-model="c.unsigned" />
                            <p>Unsigned</p>
                        </div>

                        <div>
                            <input type="text" placeholder="Default Value" v-model="c.default_value" class="input input-sm w-full input-bordered" />
                        </div>

                        <div>
                            <textarea class="textarea textarea-bordered h-16 w-full" v-model="c.comment" placeholder="Comment"></textarea>
                        </div>

                        <div class="flex justify-end">
                            <button class="btn btn-xs btn-primary" @click="deleteColumn(c)">Delete Column</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>
</template>


<script setup>
  import {ref, defineProps, defineEmits} from "vue"
  import { DotsHorizontalIcon } from "@heroicons/vue/solid";
  import types from "../../../../env/types.js"
  import IndexTypes from "../../../../env/indexTypes.js"
  const props   = defineProps(["table"])
  const emit   = defineEmits(["delete", "add"])

  const deleteColumn = (column) => {
    console.log(column.id);
    emit('delete', column.id)
  }

  const addColumn = () => {
    emit('add')
  }


</script>