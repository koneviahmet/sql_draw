/* 
bigint: Çok büyük tam sayıları saklamak için kullanılır.
binary: Sabit uzunluklu binary verileri saklamak için kullanılır.
bit: Bit verilerini saklamak için kullanılır.
blob: Binary verileri ve çok büyük metinleri saklamak için kullanılır.
boolean: Mantıksal (true/false) verileri saklamak için kullanılır.
char: Sabit uzunluklu karakter dizileri saklamak için kullanılır.
character: Sabit uzunluklu karakter dizileri saklamak için kullanılır.
character varying: Değişken uzunluklu karakter dizileri saklamak için kullanılır.
clob: Çok büyük metinleri saklamak için kullanılır.
date: Tarih verilerini saklamak için kullanılır.
datetime: Tarih ve saat verilerini saklamak için kullanılır.
decimal: Hassas hesaplamalar için kullanılır.
double: Çift hassasiyetli ondalık sayıları saklamak için kullanılır.
double precision: Çift hassasiyetli ondalık sayıları saklamak için kullanılır.
enum: Belirli bir değer listesinden bir değer saklamak için kullanılır.
fixed: Hassas hesaplamalar için kullanılır.
float: Ondalık sayıları saklamak için kullanılır.
float4: Dört byte ile saklanan ondalık sayıları saklamak için kullanılır.
float8: Sekiz byte ile saklanan ondalık sayıları saklamak için kullanılır.
image: Binary verileri saklamak için kullanılır.
inet: IPv4 veya IPv6 adreslerini saklamak için kullanılır.
int: Tam sayıları saklamak için kullanılır.
int2: İki byte ile saklanan tam sayıları saklamak için kullanılır.
int4: Dört byte ile saklanan tam sayıları saklamak için kullanılır.
int8: Sekiz byte ile saklanan tam sayıları saklamak için kullanılır.
integer: Tam sayıları saklamak için kullanılır.
interval: Zaman aralıklarını saklamak için kullanılır.
json: JSON verilerini saklamak için kullanılır.
jsonb: JSON verilerini binary formatında saklamak için kullanılır.
longblob: Çok büyük binary verileri saklamak için kullanılır.
longtext: Çok büyük metinleri saklamak için kullanılır.
macaddr: MAC adreslerini saklamak için kullanılır.
mediumblob: Orta büyüklükte binary verileri saklamak için kullanılır.
mediumint: Orta büyüklükte tam sayıları saklamak için kullanılır.
mediumtext: Orta büyüklükte metinleri saklamak için kullanılı
*/

const types = [
  "bigint",
  "binary",
  "bit",
  "blob",
  "boolean",
  "char",
  "character",
  "character varying",
  "clob",
  "date",
  "datetime",
  "decimal",
  "double",
  "double precision",
  "enum",
  "fixed",
  "float",
  "float4",
  "float8",
  "image",
  "inet",
  "int",
  "int2",
  "int4",
  "int8",
  "integer",
  "interval",
  "json",
  "jsonb",
  "longblob",
  "longtext",
  "macaddr",
  "mediumblob",
  "mediumint",
  "mediumtext",
  "money",
  "numeric",
  "nvarchar",
  "number",
  "real",
  "set",
  "smallint",
  "serial",
  "smallserial",
  "text",
  "time",
  "timestamp",
  "tinyblob",
  "tinyint",
  "tinytext",
  "uuid",
  "varbinary",
  "varchar",
  "xml"
];
  
export default types;