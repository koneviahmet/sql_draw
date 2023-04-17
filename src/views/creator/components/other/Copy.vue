<template>
    <div>
        <button @click="copyFNC" class="">
            <input type="text" ref="textToCopy" :value="text" class="absolute -top-10" />
            <DocumentDuplicateIcon class="h-5" v-if="!copyStatus"/>
            <CheckIcon class="h-5" v-if="copyStatus"/>
        </button>
    </div>
</template>

<script setup>
import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/vue/outline";
import {defineProps, ref} from 'vue'
import { notyfSuccess } from "../../../../utils/notyf.js";
const props = defineProps(['text'])
const textToCopy = ref();
const copyStatus = ref(false)
const copyFNC = () => {
  textToCopy.value.select()
  const copy = document.execCommand("copy");
  if (copy) {
      notyfSuccess("Başarıyla Kopyalandı.")
      copyStatus.value = true 
      setTimeout(() => copyStatus.value = false, 2000)
  }
  
}
</script>