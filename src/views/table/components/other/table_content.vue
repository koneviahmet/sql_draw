<template>
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
        :w="250"
        :x="size.left"
        :y="size.top"
        :z="size.z"
        @resizing="resize" 
        @dragging="resize"
        @dragstop="onDeactivated"
        @clicked="setZ"
    >
        <div class="shadow-lg cursor-pointer" :class="`opacity-${table.opacity}`">
            <div class="bg-gray-100">
                <div class="text-center font-bold p-1 text-sm" :class="`bg-${table.color}`">{{table.name}}</div>
                <div v-for="column in table.columns" :key="column.id" class="border-t">
                    <div class="flex space-x-1 p-1 items-center justify-center" :class="column.color && `border-l-4 border-${column.color }`">
                        <div>
                            <KeyIcon class="w-3 justify-between text-gray-300" v-if="column.index_types == 'primary_key'"/>
                            <FingerPrintIcon class="w-3 justify-between text-gray-300" v-if="column.index_types == 'unique_key'"/>
                            <InformationCircleIcon class="w-3 justify-between text-gray-300" v-if="column.index_types == 'index'"/>
                        </div>
                        <div class="w-full text-gray-600">{{ column.name }}</div>
                        <div class="text-gray-400 text-2xs min-w-max">{{ column.type }}</div>
                    </div>
                </div>
            </div>
        </div>
    
    </vue-drag-resize>
</template>

    
<script setup>
    import { KeyIcon, FingerPrintIcon, InformationCircleIcon} from "@heroicons/vue/solid";
    import {ref, defineProps, defineEmits} from "vue"
    import VueDragResize from 'vue3-drag-resize'
    const props = defineProps(["content_size", "table", "z", "setZ"])
    const emit = defineEmits(["drag"])
    const isActive = ref(true)
    const size = ref({width: 0, height: 0, top: props.table.position.top, left: props.table.position.left, z: props.z})
    
    //content_size ana contentin boyutları
    //size tablo contentinin boyutları ve pozisyonu

    const resize = (newRect) => {
        size.value.width  = newRect.width;
        size.value.height = newRect.height;
        size.value.top    = newRect.top;
        size.value.left   = newRect.left;
        
    }

    const setZ = (newRect) => {
        props.setZ(props.table.id)
        size.value = {...size.value, z: props.z}
    }

    const onDeactivated = () => {
        emit('drag', size.value)
    }
</script>