<template>
    <div>
       <Article :selectedTable="selectedTable" :article="article" @match_columns="columns = $event"/>
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
            selected: ["a(12)", "b(33)", "c(44)", "time(12)", "e('ahmet')"],
            default: [{name: 'id', checked: 'a(12)'},{name: 'timestamps', checked: 'time(12)'}]
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
                            ["firstName()", "Rastgele bir ad döndürür"],
                            ["lastName()", "Rastgele bir soyadı döndürür"],
                            ["address()", "Rastgele bir adres döndürür"],
                            ["city()", "Rastgele bir şehir adı döndürür"],
                            ["country()", "Rastgele bir ülke adı döndürür"],
                            ["email()", "Rastgele bir e-posta adresi döndürür"],
                            ["phoneNumber()", "Rastgele bir telefon numarası döndürür"],
                            ["text($maxNbChars = 200)", "Belirtilen maksimum karakter sayısıyla rastgele bir metin döndürür"],
                            ["date($format = 'Y-m-d', $max = 'now')", "Belirtilen tarih formatında rastgele bir tarih döndürür"],
                            ["time($format = 'H:i:s', $max = 'now')", "Belirtilen saat formatında rastgele bir saat döndürür"],
                            ["dateTime($format = 'Y-m-d H:i:s', $max = 'now')", "Belirtilen tarih-saat formatında rastgele bir tarih-saat döndürür"],
                            ["numberBetween($min = 1000, $max = 9000)", "Belirtilen minimum ve maksimum aralıklarda rastgele bir sayı döndürür"],
                            ["randomElement($array = array('a','b','c'))", "Belirtilen dizi içindeki bir öğeyi rastgele olarak seçer"],
                            ["randomFloat($nbMaxDecimals = NULL, $min = 0, $max = NULL)", "Belirtilen minimum ve maksimum değerler arasında rastgele bir ondalık sayı döndürür"],
                            ["randomLetter()", "A-Z arasında rastgele bir harf döndürür"],
                            ["randomNumber($nbDigits = NULL, $strict = false)", "Belirtilen sayıda rastgele bir sayı döndürür"],
                            ["shuffle('hello')", "Belirtilen diziyi karıştırır ve yeni bir dizi olarak döndürür"],
                            ["word()", "Rastgele bir kelime döndürür"],
                            ["words($nb = 3, $asText = false)", "Belirtilen sayıda tesadüfi kelime döndürür"],
                            ["boolean($chanceOfGettingTrue = 50)", "Belirtilen yüzde olasılıkla doğru veya yanlış döndürür"],
                            ["unique()", "Benzersiz bir değer döndürür"]
                        ]
        },
        {
            type: 'sub_title',
            text: 'Seeder komutları'
        },
        {
            type: 'bash',
            text: `php artisan db:seed`,
            description: 'Bu komut, seederları çalıştırır ve tabloları otomatik olarak doldurur.'
        }  
    ]
})






</script>