const roles = [
  { role: 1, description: "quest" },
  { role: 2, description: "user" },
  { role: 3, description: "admin" },
];

const roleArr = {
  notAuth: [1],
  isAuth: [2, 3],
};

/* role pages */
const rolePageArr = {
  HomePage: [1, 2, 3],
  ErrorPage: [1, 2, 3],
  Error404: [1, 2, 3],
  TosPage: [1, 2, 3],
  PrivacyPage: [1, 2, 3],
  UserHome: [2, 3],
  UserSignIn: [1, 2, 3],
  UserUpdate: [2, 3],
  UserDetail: [2, 3],
  UserList: [2, 3],
  UserSearch: [2, 3],
  UserLogin: [1, 2, 3],
  SchemaHome: [2, 3],
  SchemaCreate: [1, 2, 3],
  SchemaUpdate: [2, 3],
  SchemaDetail: [2, 3],
  SchemaList: [2, 3],
  SchemaSearch: [2, 3],
  TableHome: [1, 2, 3],
  TableCreate: [1, 2, 3], 
  TableUpdate: [1, 2, 3], 
  TableDetail: [1, 2, 3], 
  TableList: [1,2, 3], 
  TableSearch: [2, 3], 
  DbaseHome: [1,2, 3],
  DbaseCreate: [1, 2, 3], 
  DbaseUpdate: [1,2, 3], 
  DbaseDetail: [1,2, 3], 
  DbaseList: [1,2, 3], 
  DbaseSearch: [1,2, 3], 
  CreatorHome: [2, 3],
  CreatorCreate: [1, 2, 3], 
  CreatorUpdate: [2, 3], 
  CreatorDetail: [2, 3], 
  CreatorList: [2, 3], 
  CreatorSearch: [2, 3], 
  empty: [],
};

export default { ...roleArr, ...rolePageArr };
export { roles };
