<template>
    <div>
       <Article :selectedTable="selectedTable" :article="article" @columns="columns = $event"/>
    </div>
</template>


<script setup>
import {ref, defineProps, watch, computed} from 'vue'
import Article from '../../../components/other/Article.vue';
const props = defineProps(["tables", "selectedTable"])
const code  = ref(`var i = 5;`)
const columns = ref(null); //seçilen column



watch(columns, (currentColumns) => setColumns(currentColumns))
watch(props, () => setColumns(columns.value))


const setColumns = (currentColumns) => {
    let selectedColumns = currentColumns.map(i => i);
    const columnsFilter = selectedColumns.map(n => {
        let head = "$table->"
        let middle = ""
        let end = ";"

        let column = getNameToColumns(n)
        const function_arr = ["id", "timestamps"]
        if (function_arr.includes(column.name) || column.index_types == 'primary_key') {
            middle +=  `${n}()`
        }else{

            middle +=  `${column.type}('${n}')`

        }

        
        if (column.nullable) {
            middle += `->nullable()`
        }

        if (column.default_value) {
            middle += `->default('${column.default_value}')`
        }

        // $table->string('name');
    

        return `${head}${middle}${end}`
    });


    code.value = columnsFilter.join("\n")
    // $table->id();
    // $table->string('name');
}


const getNameToColumns = (name) => {
    return props.selectedTable.columns.filter(i => i.name == name)[0];
}



const article = computed(() => {
    return [
        {
            type: 'title',
            text: 'Migration Nedir?'
        },
        {
            type: 'paragraph',
            text: 'Migration, veritabanı işlemlerinin yönetimini kolaylaştıran bir araçtır ve veritabanı tablolarının oluşturulması, değiştirilmesi veya silinmesi gibi işlemleri gerçekleştirmek için kullanılır.'
        },
        {
            type: 'select_column',
            selected: props.selectedTable?.columns.map(i => i.name)
        },
        {
            type: 'code',
            code: code.value,
            lang: 'javascript',
            height: '52px'
        }    
    ]
})






</script>