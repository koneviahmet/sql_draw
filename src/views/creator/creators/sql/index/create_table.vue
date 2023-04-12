<template>
    <!-- https://www.npmjs.com/package/codemirror-editor-vue3 -->
    <div>
       create table {{ selectedTable }}

       <Codemirror
            v-model:value="code"
            placeholder="test placeholder"
            :height="300"
            :options="{ mode: 'text/javascript', theme: 'dracula'}"


        />
    </div>
</template>

<script setup>
import {ref, defineProps, onMounted} from 'vue'
import Codemirror from "codemirror-editor-vue3";
import "codemirror/addon/display/placeholder.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/display/placeholder.js";
import "codemirror/theme/dracula.css";
const props = defineProps(["tables", "selectedTable"])

const code = ref(null);


onMounted(() => {
    code.value = `
    var i = 0;
    for (; i < 9; i++) {
    console.log(i);
    // more statementsasd
    }`;
})

</script>

