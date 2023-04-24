const SeedSelect = [
  "$faker->name()", 
  "$faker->firstName()", 
  "$faker->lastName()", 
  "$faker->address()", 
  "$faker->city()", 
  "$faker->country()", 
  "$faker->email()", 
  "$faker->phoneNumber()", 
  "$faker->text(200)", 
  "$faker->date('Y-m-d')", 
  "$faker->time('H:i:s')", 
  "$faker->dateTime('Y-m-d H:i:s')", 
  "$faker->numberBetween(1000, 9000)", 
  "$faker->randomElement(array('a','b','c'))", 
  "$faker->randomFloat()", 
  "$faker->randomLetter()", 
  "$faker->randomNumber()", 
  "$faker->shuffle('hello')", 
  "$faker->word()", 
  "$faker->words(3)", 
  "$faker->boolean(50)", 
  "$faker->unique()",
  "bcrypt('123456')",
  "Str::random(5)",
  "Str::slug('Hello World') //hello-world",
  "'Helle World'",
]


export default SeedSelect;
 
  
