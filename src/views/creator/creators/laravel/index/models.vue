<template>
    match_columns2: {{ columns }}
    <div>
       <Article :selectedTable="selectedTable" :article="article" @match_columns2="columns = $event"/>
    </div>
</template>


<script setup>
import {ref, defineProps, watch, computed} from 'vue'
import Article from '../../../components/other/Article.vue';
import FactorySelect from '../../../../../env/factorySelect'
import FactoryDefault from '../../../../../env/factoryDefault'
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
            text: 'Models Nedir?'
        },
        {
            type: 'paragraph',
            text: 'Laravel modelleri, veritabanı tabloları ile eşleştirilebilir. Örneğin, bir "users" tablosuna karşılık gelen bir "User" modeli oluşturabilirsiniz. Bu model sınıfı, tablodaki her bir satırı bir nesne olarak temsil eder ve veritabanı işlemlerini gerçekleştirmek için kullanılır. Laravel, modeller aracılığıyla veritabanı sorgularını kolaylaştıran ve veri işlemlerini daha okunaklı ve anlaşılır hale getiren birçok yöntem sağlar.'
        },
        {
            type: 'match_column2',
            selected: FactorySelect,
            default: FactoryDefault
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
                            ["$table", "Modelin kullanacağı veritabanı tablosunun adını belirtir."],
                            ["$primaryKey", "Modelin kullanacağı özel bir anahtar sütununu belirtir."],
                            ["$keyType", "Anahtar sütununun veri tipini belirtir."],
                            ["$incrementing", "Anahtar sütununun artan (incremental) olup olmadığını belirtir."],
                            ["$timestamps", "Modelin oluşturma ve güncelleme tarihlerini otomatik olarak güncellemesini sağlar."],
                            ["$dateFormat", "Tarihleri modelde nasıl biçimlendireceğini belirtir."],
                            ["$connection", "Modelin kullanacağı veritabanı bağlantısını belirtir."],
                            ["$perPage", "Sayfalama işlemleri için kaç öğe gösterileceğini belirtir."],
                            ["$fillable", "Modelin doldurulabilir (fillable) alanlarını belirtir."],
                            ["$guarded", "Modelin doldurulamaz (guarded) alanlarını belirtir."],
                            ["$hidden", "Modelde gizlenmesi gereken sütunları belirtir."],
                            ["$visible", "Modelde görünmesi gereken sütunları belirtir."],
                            ["$casts", "Modeldeki sütunların veri tiplerini dönüştürür."],
                            ["$dates", "Modeldeki sütunların tarih verisi içerdiğini belirtir."],
                            ["$appends", "Modeldeki sütunlara dinamik olarak özellik ekler."],
                            ["$with", "Modelin yüklenirken varsayılan olarak yüklenmesi gereken ilişkisel verileri belirtir."],
                            ["$withCount", "İlişkisel verilerin sayısını hesaplamak için kullanılır."],
                            ["$withoutGlobalScopes", "Global sorgu kapsamlarını devre dışı bırakmak için kullanılır."],
                            ["$withTrashed", "Silinmiş verileri de dahil ederek tüm verileri yükler."],
                            ["$onlyTrashed", "Sadece silinmiş verileri yükler."],
                            ["$using", "Modelin kullanacağı veritabanı bağlantısını ve tablo adını belirler."],
                            ["$dispatchesEvents", "Modeldeki belirli olayların tetiklenmesini sağlar."],
                            ["$observables", "Modelde tanımlanmış olayları tutar."]
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