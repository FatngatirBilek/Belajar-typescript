let namaKu: string = "Fathirbimashabri";
let username: number = 123;
let hidup:boolean = true;


//cara pake multi type 
let pacarKamu: number | string | boolean ;
pacarKamu = "100 bro";


//array biasa
let pacarSaya: string[]; //array ini cuman bisa satu type 
pacarSaya = ["Siapa Ya", "kamu"];

//array tuple type
let SelingkuhanSaya: [string, number]; //array ini bisa menggunakan type yang di cantumkan
SelingkuhanSaya= ["Dia",13];


//type data custom
type TemanType = {
nama: string;
isBaik: boolean;
utang?: number; //tanda tanya "?" setelah variable menandakan bahwa itu optional
}
let TemanKu: TemanType;
TemanKu = {
    nama: "Farel",
    isBaik: true,
}


//function biasa
function create():string{
    return "Terima kasih";
}
function create1():void{
console.log("Aku sayang kamu");
}
function itungan():void{
    let a = "Aku cinta"
    let b = "kamu"
    let c = a+b
    console.log(c)
    
}
//arrow function 
const create2=() :string => "hello anak-anak :D"
const result = create2();

//function add
function add(x: number, y:number):void{
    const z: number = x+y;
    console.log("hasilnya adalah: " +z);
}
function add1(x: number, y:number):string{
    return `${x} ditambah ${y} hasilnya: ${x+y}`; 
}
const resultadd1 = add1(100,50);


//interface
interface IProsessor{
    brand: string;
    baseModel: string;
    modelName: string;
    clockSize: number;
}

function createprocie(procie:IProsessor):void{
    console.log(`
    ---
    terimakasih ${procie.brand} ✨✨
    ---
    Anda telah berhasil membuat processor dengan dengan detail 
    berikut: 👇

    nama base model: ${procie.baseModel} ❤️
    nama model: ${procie.modelName} 👑
    clock speed: ${procie.clockSize} 🔱
    `);
}
const intelCorei9 = {
    brand: "Intel",
    baseModel:"Intel Core i9",
    modelName:"13900KS",
    clockSize:6.00,
};


//tampilkan output
console.log({namaKu}); 
console.log({username});
console.log({hidup});
console.log({pacarKamu});
console.log({pacarSaya});
console.log({SelingkuhanSaya});
console.log({TemanKu});
console.log(create());
console.log(result);
itungan();
create1();
add(10,20);
console.log(resultadd1);
createprocie(intelCorei9);