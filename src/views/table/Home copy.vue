<template>
<div class="relative bg-gray-300 h-full w-full" ref="drag">

  <div>
    <button @click="isActive = !isActive">{{ !isActive ? 'active' : 'passive' }}</button>
  </div>
  <!-- 
    parentLimitation -> parentin dışına çıkamasın demek
    preventActiveBehavior -> metinleri seçebileyim demek
    :aspectRatio="true" -> oranlı büyüsün demek
    :snapToGrid="true" :gridY="20" :gridX="20" -> gridler halinde ilerlesin demek
    w, h, minw, minh, x, y, z 
    z -> z-index
    :stickSize="5" -> boyutlandırma kutucuklarının boyutunu belirler
    :sticks =" ['tm','bm','ml','mr'] -> boyutlandırma kısıtlaması yapar
    axis="x" -> hareket eksenini belirler
   -->
  <vue-drag-resize class=""  
        :isActive="isActive" 
        :isDraggable="isActive" 
        :isResizable="!isActive" 
        :preventActiveBehavior="!isActive"
        :parentLimitation="true"
        :w="200"
        :h="'auto'"
        :x="110"
        :y="150"
        :z="10"
        @resizing="resize" 
        @dragging="resize"
      >
        <div class="bg-red-200 pt-2 shadow-lg" :class="isActive && 'cursor-pointer'">
         <!-- <h3>Hello World! <br> {{ width }} {{ height }}</h3>
          <p>{{ top }} х {{ left }} </p>
          <p>{{ widthx }} х {{ heightx }}</p> -->
          
          <div class="bg-gray-100">
              <h3>Hello World! <br> {{ width }} {{ height }}</h3>
              <p>{{ top }} х {{ left }} </p>
              <p>{{ widthx }} х {{ heightx }}</p>
              <button class="btn btn-sm">Aç</button>
              <div>
                <div v-for="i in 5" :key="i" class="border-t">{{ i }}</div>
              </div>

          </div>

        </div>

  </vue-drag-resize>

</div>

</template>

<script setup>
    import {ref} from "vue"
    import VueDragResize from 'vue3-drag-resize'
    import { useElementSize } from '@vueuse/core'
    const drag = ref(null)
    const { width, height } = useElementSize(drag)
    const isActive = ref(true)

    const  widthx = ref(0);
    const  heightx = ref(0);
    const  top  = ref(0);
    const  left = ref(0);

    const resize = (newRect) => {
  
      console.log(width.value, height.value)

      widthx.value = newRect.width;
      heightx.value = newRect.height;
      top.value = newRect.top;
      left.value = newRect.left;
    }
</script>