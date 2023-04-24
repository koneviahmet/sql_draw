<template>
    <div>
       <Article :selectedTable="selectedTable" :article="article" @match_columns="columns = $event"/>
    </div>
</template>


<script setup>
import {ref, defineProps, watch, computed} from 'vue'
import Article from '../../../components/other/Article.vue';
import SeedSelect from '../../../../../env/seedSelect'
import SeedDefault from '../../../../../env/seedDefault'
const props = defineProps(["tables", "selectedTable"])
const code  = ref(`var i = 5;`)
const columns = ref(null); //seçilen column



watch(columns, (currentColumns) => setColumns(currentColumns))
watch(props, () => setColumns(columns.value))


const setColumns = async (currentColumns) => {
    const add = []
    add.push(`DB::table('${props.selectedTable?.name}')->insert([`)
    let selectedColumns = await currentColumns?.map(async (i, key) => {
        let column  = getNameToColumns(i.name)
        let checked = i.checked
        let head = "\t"
        let middle = ""
        let end = ""
        middle += `'${column.name}' => ${checked}${key + 1 == currentColumns.length ? '':','}`
        add.push(`${head}${middle}${end}`)
    });
    // DB::table('users')->insert([
    //         'name' => 'John Doe',
    //         'email' => 'johndoe@example.com',
    //         'password' => bcrypt('password'),
    //     ]);
    add.push(`]);`)
    code.value = add?.join("\n")

}


const getNameToColumns = (name) => {
    return props.selectedTable.columns.filter(i => i.name == name)[0];
}



const article = computed(() => {
    return [
        {
            type: 'title',
            text: 'Seeder Nedir?'
        },
        {
            type: 'paragraph',
            text: 'Seeder\'lar, geliştirme ve test ortamlarında veritabanını doldurmak için kullanışlı bir yöntemdir.'
        },
        {
            type: 'match_column',
            selected: SeedSelect,
            default: SeedDefault
        },
        {
            type: 'code',
            code: code.value,
            lang: 'javascript',
            height: '52px'
        },
        {
            type: 'dictionary',
            dictionary: [  ["name()", "Rastgele bir isim döndürür"],
                            ["firstName()", "Rastgele bir ad döndürür"]
                        ]
        },
        {
            type: 'sub_title',
            text: 'Model komutları'
        },
        {
            type: 'bash',
            text: `php artisan make:model ${props?.selectedTable?.name} -mfs`,
        },
        {
            type: 'dictionary',
            dictionary: [  ["-m", "model, controller, migration oluşturuyor."],
                            ["-f", "factory oluşturuyor."],
                            ["-s", "seeder oluşturuyor."],
                        ]
        },
    ]
})






</script>