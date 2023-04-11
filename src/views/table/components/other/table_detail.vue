<template>
    <div class="bg-gray-50">
        {{table}}
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
                <div><input type="checkbox" class="tooltip toggle toggle-xs" data-tip="nullable" v-model="c.nullable" /></div>
                
                <!--index type-->
                <div>
                    <select class="select select-bordered select-sm w-full" v-model="c.index_types">
                        <option v-for="t in IndexTypes" :key="t">{{t}}</option>
                    </select> 
                </div>

                <!--other opt-->
                <div class="dropdown dropdown-right">
                    <div tabindex="0" class="bg-gray-100 p-1 hover:bg-gray-200 cursor-pointer">
                        <DotsHorizontalIcon class="w-4"/>
                    </div>
                    <div tabindex="0" class="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-80">
                        asd
                    </div>

                </div>
            </div>
        </div>
        <div class="flex justify-end space-x-1 p-2">
            <button class="btn btn-primary btn-sm">+Index</button>
            <button class="btn btn-primary btn-sm">+Column</button>
        </div>
    </div>
</template>


<script setup>
  import {ref, defineProps} from "vue"
  import { DotsHorizontalIcon } from "@heroicons/vue/solid";
  import types from "../../../../env/types.js"
  import IndexTypes from "../../../../env/indexTypes.js"
  const props   = defineProps(["table"])


</script>