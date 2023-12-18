//Oop
//Object
let soru = {
  soruMetni: "Hangisi js paket yönetim uygulamasıdır",
  cevapSec: {
    a: "Node.js",
    b: "Typescript",
    c: "Npm",
  },
  dogruCev: "c",
  cevabiKontolEt: function (cevap) {
    return cevap === this.dogruCev;
  },
};

let soru1 = {
  soruMetni: "Hangisi .net paket yönetim uygulamasıdır",
  cevapSec: {
    a: "Node.js",
    b: "nuget",
    c: "Npm",
  },
  dogruCev: "b",
  cevabiKontolEt: function (cevap) {
    return cevap === this.dogruCev;
  },
};

console.log(soru.cevabiKontolEt("a"));
console.log(soru1.cevabiKontolEt("b"));

//Sınıf ve constructor oluşturup ondan nesne örneklicez
//Constructor da ES5 de destekliyor Es6 ve 7 de sınıf kullanılıyor
// Constructor->instance

//sınıflar ve constructor lar Büyük harfle yazılır
// function Soru(soruMetni, cevapSec, dogruCev) {
//   this.soruMetni = soruMetni;
//   this.cevapSec = cevapSec;
//   this.dogruCev = dogruCev;
//   this.cevabiKontolEt = function (cevap) {
//     return cevap === this.dogruCev;
//   };
// }
// let soru2 = new Soru(
//   "Hangisi js paket yönetim uygulamasıdır",
//   { a: "Node.js", b: "Typescript", c: "Npm" },
//   "c"
// );
// let soru3 = new Soru(
//   "Hangisi .net paket yönetim uygulamasıdır",
//   { a: "Node.js", b: "nuget", c: "Npm" },
//   "b"
// );

// console.log(soru2.dogruCev);

// let sorular = [
//   new Soru(
//     "Hangisi js paket yönetim uygulamasıdır",
//     { a: "Node.js", b: "Typescript", c: "Npm" },
//     "c"
//   ),
//   new Soru(
//     "Hangisi js paket yönetim uygulamasıdır",
//     { a: "Node.js", b: "Typescript", c: "Npm" },
//     "c"
//   ),
// ];

// console.log(sorular[0].cevapSec);
// console.log(sorular[0].cevabiKontolEt("a"));

//Prototype
//Şimdi biz normalde eğer constructor şeklinde tnaımlarsak mesela cevabıKontrolet methhodunu yukarıda öyle tanımladık bu şu anlama geliyor biz her nesne oluşturduğumuzda o method da oluşuyor oysa ben o methodu prototype içine atarsam Referansı gönderiliyor
function Soru(soruMetni, cevapSec, dogruCev) {
  this.soruMetni = soruMetni;
  this.cevapSec = cevapSec;
  this.dogruCev = dogruCev;
}

Soru.prototype.cevabiKontolEt = function (cevap) {
  return cevap === this.dogruCev;
};
// Methodları bu şekilde prototype için alırsak daha iyiolur
let soru2 = new Soru(
  "Hangisi js paket yönetim uygulamasıdır",
  { a: "Node.js", b: "Typescript", c: "Npm" },
  "c"
);
console.log(soru2.cevabiKontolEt("a"));
