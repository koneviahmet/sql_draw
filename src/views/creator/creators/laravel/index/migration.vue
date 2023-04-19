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

        // console.log(column);

        const function_arr = ["id", "timestamps"]
        if (function_arr.includes(column.name) || column.index_types == 'primary_key') {
            middle +=  `${n}()`
        }else{
            /* iki parametre alabilecekleri belirleyelim */
            const otherParameter = [
                {
                    type: 'char',
                    args: [10]
                },
                {
                    type: 'varchar',
                    args: [250]
                },
                {
                    type: 'string',
                    args: [50]
                },
                {
                    type: 'decimal',
                    args: [8,2]
                },
            ]
            
            let otherParameterFilter = otherParameter.filter(i => i.type == column.type)

            if (otherParameterFilter.length > 0) {
                //birden fazla parametre alıyor demektir.
                middle +=  `${column.type}('${n}',${otherParameterFilter[0].args.join(',')})`
            }else{  

                //tek parametre alıyor demektir
                middle +=  `${column.type}('${n}')`

            }
        }

        //add nulable
        if (column.nullable) {
            middle += `->nullable()`
        }
        
        //add unsigned
        if (column.unsigned) {
            middle += `->unsigned()`
        }
        
        //add unique
        if (column.index_types == "unique_key") {
            middle += `->unique()`
        }
  
        //add index
        if (column.index_types == "index") {
            middle += `->index()`
        }
     
        //add default
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
        },
        {
            type: 'dictionary',
            dictionary: [
                ["nullable()", "Sütunun null değerlerini kabul etmesine izin verir."], 
                ["default()", "Sütunun varsayılan değerini ayarlar."], 
                ["unsigned()", "Tam sayı sütunlarının negatif değerler kabul etmemesini sağlar."], 
                ["unique()", "Sütunu benzersiz kılar."], 
                ["index()", "Sütunu bir index olarak tanımlar."], 
                ["references()", "Sütunun bir diğer tabloya referans olması için kullanılır."], 
            ]
        },
        {
            type: 'bash',
            text: `$table->foreign('user_id')->references('id')->on('users');`,
            description: 'references kullanımı için aşağıda örnek verilmiştir.'

        },
        {
            type: 'sub_title',
            text: 'Migration composer komutları'
        },
        {
            type: 'bash',
            text: `php artisan make:migration ${props?.selectedTable?.name}`,
            description: 'Bu komut, migration dosyasını oluşturur.'
        },
        {
            type: 'bash',
            text: `php artisan migrate`,
            description: 'Bu komut, tüm migration dosyalarını veritabanına uygular.'
        },
        {
            type: 'bash',
            text: `php artisan migrate:rollback`,
            description: 'Bu komut, son yapılmış migration işlemini geri alır.'
        },
        {
            type: 'bash',
            text: `php artisan migrate:reset`,
            description: 'Bu komut, tüm migration işlemlerini geri alır.'
        },
        {
            type: 'bash',
            text: `php artisan migrate:fresh`,
            description: 'Bu komut, tüm tabloları siler ve migration dosyalarını uygular.'
        }     
    ]
})






</script>