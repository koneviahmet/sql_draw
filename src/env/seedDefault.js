const SeedDefault = [
  {name: 'name', checked: '$faker->name()'},
  {name: 'email', checked: '$faker->email()'},
  {name: 'password', checked: `bcrypt('123456')`},
]


export default SeedDefault;
 
  
