<template>
  <div class="w-full">
    <!-- <MainMenu /> -->
    <div class="flex w-full">
      <div class="w-1/2"><List @id="selectedId = $event"/></div>
      <div class="w-1/2">    
          <Update :id="updateId" @id="selectedId = $event" v-if="updateId"/>
          <Create v-else/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue'
import MainMenu from "./components/menu/MainMenu.vue";
import Create from "./components/form/create.vue";
import Update from "./components/form/update.vue";
import List from "./List.vue";

const selectedId = ref(null)
const updateId = ref(null)
watch(selectedId, (currentSelectedId) => {
  console.log(currentSelectedId);
  updateId.value = null
  setTimeout(() => {
    updateId.value = currentSelectedId
  }, 100)
})

</script>


