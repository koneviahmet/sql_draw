<template>
    <!-- https://www.npmjs.com/package/codemirror-editor-vue3 -->
    <div>
       <Codemirror
            v-model:value="code"
            placeholder="test placeholder"
            :height="300"
            :options="{ mode: 'text/javascript', theme: 'dracula'}"
            v-if="refresh"
        />
    </div>
</template>

<script setup>
import {ref, defineProps, watch} from 'vue'
import Codemirror from "codemirror-editor-vue3";
import "codemirror/addon/display/placeholder.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/display/placeholder.js";
import "codemirror/theme/dracula.css";
const props = defineProps(["lang", "code"])
const refresh = ref(true)
const code = ref(props.code)

watch(props, (cProps) => {
    refresh.value = false
    code.value = cProps.code
    setTimeout(() => refresh.value = true, 10)
    
})


</script>

