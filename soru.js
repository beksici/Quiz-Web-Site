function Soru(soruMetni, siklar, dogruCev) {
  this.soruMetni = soruMetni;
  this.dogruCev = dogruCev;
  this.siklar = siklar;
}
Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCev;
};
let sorular = [
  new Soru(
    "1-Hangisi js paket yönetim uygulamasıdır",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "2-Hangisi js paket yönetim uygulamasıdır",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "3-Hangisi js paket yönetim uygulamasıdır",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
];
