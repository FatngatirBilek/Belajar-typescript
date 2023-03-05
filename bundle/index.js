"use strict";
let namaKu = "Fathirbimashabri";
let username = 123;
let hidup = true;
//cara pake multi type 
let pacarKamu;
pacarKamu = "100 bro";
//array biasa
let pacarSaya; //array ini cuman bisa satu type 
pacarSaya = ["Siapa Ya", "kamu"];
//array tuple type
let SelingkuhanSaya; //array ini bisa menggunakan type yang di cantumkan
SelingkuhanSaya = ["Dia", 13];
let TemanKu;
TemanKu = {
    nama: "Farel",
    isBaik: true,
};
//function biasa
function create() {
    return "Terima kasih";
}
function create1() {
    console.log("Aku sayang kamu");
}
function itungan() {
    let a = "Aku cinta";
    let b = "kamu";
    let c = a + b;
    console.log(c);
}
//arrow function 
const create2 = () => "hello anak-anak :D";
const result = create2();
//function add
function add(x, y) {
    const z = x + y;
    console.log("hasilnya adalah: " + z);
}
function add1(x, y) {
    return `${x} ditambah ${y} hasilnya: ${x + y}`;
}
const resultadd1 = add1(100, 50);
function createprocieIntel(procie) {
    console.log(`
    ---
    terimakasih ${procie.brand} ✨✨
    ---
    Anda telah berhasil membuat processor dengan dengan detail 
    berikut: 👇

    nama base model: ${procie.baseModel} ❤️
    nama model: ${procie.modelName} 👑
    clock speed: ${procie.clockSize} 🔱
    turbo boost enable? ${procie.turboBoost}
    total core ${procie.coreTotal}
    `);
}
function createprocieAMD(procie) {
    console.log(`
    ---
    terimakasih ${procie.brand} ✨✨
    ---
    Anda telah berhasil membuat processor dengan dengan detail 
    berikut: 👇

    nama base model: ${procie.baseModel} ❤️
    nama model: ${procie.modelName} 👑
    clock speed: ${procie.clockSize} 🔱
    turbo boost enable? ${procie.precisionBoost}
    total core ${procie.coreTotal}
    `);
}
const Corei9 = {
    brand: "Intel",
    baseModel: "Intel Core i9",
    modelName: "13900KS",
    clockSize: 6.00,
    coreTotal: 12,
    turboBoost: true,
};
const Ryzen3 = {
    brand: "AMD",
    baseModel: "ryzen 3",
    modelName: "r-5570x",
    clockSize: 6.00,
    coreTotal: "dual-core",
    precisionBoost: true,
};
//tampilkan output
console.log({ namaKu });
console.log({ username });
console.log({ hidup });
console.log({ pacarKamu });
console.log({ pacarSaya });
console.log({ SelingkuhanSaya });
console.log({ TemanKu });
console.log(create());
console.log(result);
itungan();
create1();
add(10, 20);
console.log(resultadd1);
createprocieIntel(Corei9);
createprocieAMD(Ryzen3);
