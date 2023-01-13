# Javascript

## Pendahuluan

### Scripting language.

- kode tidak perlu dikompilasi agar bisa dijalankan.
- menggunakan interpreter untuk menerjemahkan kode atau perintah yang kita tulis supaya dimengerti oleh mesin.

### Sejarah JavaScript

- 1995 oleh Brendan Eich, programmer dari Netscape. awalnya dinamai “Mocha” => “LiveScript” => “JavaScript”.
- Setelah diadopsi di luar Netscape, JavaScript distandarisasi oleh European Computer Manufacturers Association (ECMA).

### Kelebihan dari JavaScript

- Versatile => Bisa berjalan di lingkungan browser, server, bahkan desktop.
- Mudah dipelajari oleh pemula => Anda tidak perlu menginstal software dan lingkungan pengembangan lain yang rumit untuk memulai membuat program dengan JavaScript. Cukup dengan browser Anda sudah bisa menulis kode JavaScript dan menjalankannya sekaligus.
- Potensi karir yang meyakinkan.

### Rangkuman Materi

- Dibuat dengan tujuan awal agar website menjadi lebih interaktif.
- Terdapat dua lingkungan umum untuk menjalankan JavaScript, yaitu browser dan Node.js
- ECMAScript. Update besar terakhir tersaji dalam versi ES6 pada tahun 2015. Sejak saat itu, tiap tahun JavaScript melakukan update bersifat minor.

## Fundamental

```
// main.js
console.log("Hello World!");
```

### Instruksi

secara umum menjadi dua jenis

- Expression (kode yang menghasilkan nilai)
  - 7;
  - 7 + 3;
- Statement (melakukan sebuah aksi tertentu)
  - membuat variabel
  - melakukan perulangan
  - pengecekan kondisi
  - dll.

### Comments

Dua metode untuk memberikan komentar.

- Satu baris (`// di awal baris`)
  ```
  // ini komentar
  ```
- Lebih dari satu baris (`/* content */`)
  ```
  /*
  console.log("ini komentar lebih satu baris")
  */
  ```

### Variable

Untuk menyimpan informasi atau nilai yang akan dikelola dalam sebuah program.
Ada tiga cara untuk mendeklarasikan sebuah variabel
=> keyword (var, let, dan const).

Pada versi ECMAScript 2015 (ES6) dikenalkan deklarasi variabel dengan let dan const untuk menggantikan var yang dinilai kontroversial dan rawan menimbulkan bug.

```
let firstName;

// statement = expression;
firstName = "Dakasakti";

console.log(firstName);
```

Tanda sama dengan (=) disebut dengan assignment expression. => untuk menginisialisasikan nilai ke dalam sebuah variabel.

#### Aturan dalam penamaan variabel yang perlu Anda ketahui:

- Harus dimulai dengan huruf atau underscore (\_).
- Dapat terdiri dari huruf, angka, dan underscore (\_) dengan berbagai kombinasi.
- Tidak boleh mengandung spasi (whitespace).
- Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase
  - (firstName, lastName, catName)
- Tidak boleh mengandung karakter spesial (! . , / \ + \* = dll.)

### Const

Kependekan dari constant. Variabel bernilai konstan (tidak bisa diubah setelah diinisialisasi nilainya). Bayangkan variabel bernilai const sebagai sebuah kotak yang ditutup dan disegel setelah diisi, sehingga nilainya tidak bisa diubah lagi.

```
const APP = "Tutorial Javascript";
console.log(APP);
```

### Tipe Data

Memastikan tipe data dengan menggunakan fungsi `typeof()`
Beberapa tipe data sebagai berikut:

#### Undefined

Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai => variabel tanpa menginisialisasikan nilainya, variabel tersebut menjadi undefined.

```
let x;
console.log(typeof(x));
```

#### Numbers

Nilai dari tipe data number adalah angka.

```
let number = 10;
console.log(typeof(number));
```

Pada tipe data number, kita juga dapat melakukan perhitungan aritmatika.

- Penjumlahan
- Pengurangan
- Perkalian
- Pembagian
- Sisa Bagi

```
let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
```

Pada operator aritmatika juga terdapat operator increment (++) dan decrement (--).
Operator increment dan decrement digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang.

```
let a = 10;

a++;
a--;
```

#### BigInt

tipe data “Number” hanya mencakup nilai dari -(2^53 - 1) hingga (2^53 - 1). Untuk kebutuhan umum, sebenarnya nilai tersebut sudah sangat cukup. Namun, akan ada kebutuhan tertentu di mana kita membutuhkan cakupan nilai yang lebih besar, seperti untuk kriptografi atau menentukan waktu hingga presisi microsecond.

#### Strings

String merupakan sebuah teks. Gunakan tanda petik satu (‘) atau petik dua (“) di antara teksnya.

```
let greet = "Hello";
console.log(typeof(greet))
```

Tidak ada perbedaan antara menggunakan petik satu atau petik dua. Anda dapat menggunakan tanda petik secara bergantian, khususnya jika Anda memiliki teks yang mengandung tanda petik.

Pada String, kita juga dapat menggunakan operator plus (+). Operator tersebut berfungsi untuk menggabungkan dua teks yang terpisah menjadi satu buah teks (Concatenation).

```
let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);
```

String pada JavaScript juga mendukung string Interpolation. Sederhananya, kita bisa memasukkan variabel ke dalam sebuah string template.

```
const myName = "Dakasakti";
console.log(`Hello, my name is ${myName}.`);
```

#### Boolean (True or False)

Hanya memiliki dua nilai. Tipe data ini menjadi kunci utama dalam penentuan logika.
Kita juga bisa menggunakan operator komparasi.

#### Null

Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel. Null biasa digunakan sebagai nilai sementara pada variabel, tapi sebenarnya nilai tersebut “tidak ada”.

```
let someLaterData = null;
console.log(someLaterData);
```

#### Symbol

Tipe data baru yang dikenalkan pada ES6. untuk menunjukkan identifier yang unik.

```
const id = Symbol("id");
console.log(id);
```

### Operator

- Assignment (=)
  - `+=, -=, *=, /=, %=`
- Komparasi

  - lebih dari (>)
  - lebih dari samadengan (>=)
  - kurang dari (<)
  - kurang dari samadengan (<=)
  - samadengan nilai (==)
  - samadengan nilai dan tipeData (===)
  - tidak samadengan nilai (!=)
  - tidak samadengan nilai dan tipedata (!==)

- Logical
  - && (dua nilai harus true)
  - || (salah satu harus true)
  - ! (not => membalikkan keadaan)

### If/Else Statement

Statement if akan menguji suatu kondisi. Jika kondisi bernilai true, maka blok kode di dalamnya akan dijalankan. Sebaliknya, jika bernilai false, maka proses yang ditentukan akan dilewatkan.

```
// if
const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");
```

```
// else
let x = 50;

if(x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}
```

```
let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);
```

#### Ternary operator

Membutuhkan tiga operand. Sebelum tanda tanya (?) berisi kondisi yang ingin kita evaluasi. Kemudian diikuti dengan expression apabila nilai kondisinya benar sebelum tanda titik dua. Terakhir adalah expression yang dieksekusi ketika kondisinya salah. Karena merupakan conditional expression, maka operand kedua dan ketiga harus mengembalikan nilai.

```
let $nilai = 100;
$nilai == 100 ? "Perfect" : "Good";
```

#### Truthy & Falsy

Di dalam if statement kita perlu memasukkan expression yang akan dievaluasi. Umumnya, expression tersebut mengembalikan nilai boolean untuk menentukan kondisi true atau false. Lalu bagaimana jika kita menuliskan expression yang tidak mengembalikan nilai boolean? Jawabannya bisa.

Setiap nilai pada JavaScript pada dasarnya juga mewarisi sifat boolean. Nilai ini dikenal dengan truthy atau falsy. Nilai truthy berarti nilai yang ketika dievaluasi akan menghasilkan nilai true, begitu pula falsy bernilai false. Jadi manakah yang termasuk truthy dan falsy? Selain nilai boolean false, tipe data atau nilai yang dianggap falsy, antara lain:

Falsy

- Number 0
- BigInt 0n
- String kosong seperti “” atau ‘’
- null
- undefined
- NaN, atau Not a Number

### Switch Case Statement

Selain if, JavaScript juga mendukung switch statement untuk melakukan pengecekan banyak kondisi dengan lebih mudah dan ringkas.

```
switch (expression) {
  case value1:
    // do something
    break;
  case value2:
    // do something
    break;
  ...
  ...
  default:
    // do something else
}
```

### Loop

Akan ada situasi di mana kita perlu melakukan hal yang sama berkali-kali.

```
// notEfective
console.log(1);
console.log(2);
console.log(3);
```

#### For loop

```
for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
    // do something
}

for(let i = 0; i < 3; i++) {
    console.log(i);
}
```

#### For of loop

For of mulai hadir pada ECMAScript 2015 (ES6).

```
for(arrayItem of myArray) {
    // do something
}

let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}
```

#### While and do-while

While lebih cocok digunakan pada kasus di mana kita tidak tahu pasti berapa banyak perulangan yang diperlukan.

```
let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}
```

```
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 100);
```

#### Infinite loops

Infinite loop (endless loop) adalah kondisi di mana program kita stucked di dalam perulangan. Ia akan berjalan terus hingga menyebabkan crash pada aplikasi dan komputer kecuali ada intervensi secara eksternal, seperti mematikan aplikasi.

### Materi Pendukung

Materi tambahan yang bisa Anda pelajari terkait modul JavaScript Fundamentals:

- [Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types)
- [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
