function UI() {
  (this.btn_start = document.querySelector(".btn-start")),
    (this.next_btn = document.querySelector(".next_btn")),
    (this.quiz_box = document.querySelector(".quiz-box")),
    (this.option_list = document.querySelector(".option_list")),
    (this.score_box = document.querySelector(".score_box")),
    (this.btn_replay = document.querySelector(".btn_replay")),
    (this.btn_quit = document.querySelector(".btn_quit")),
    (this.correctIcon = ` <div class="icon"><i class="fas fa-check"></i></div>`),
    (this.incorrectIcon = ` <div class="icon"><i class="fas fa-times"></i></div> `),
    (this.time_second = document.querySelector(".time_second")),
    (this.time_text = document.querySelector(".time_text")),
    (this.time_line = document.querySelector(".time_line"));
}

UI.prototype.soruGoster = function (soru) {
  let question = `<span>${soru.soruMetni}</span>`;
  let options = ``;
  for (let cevap in soru.siklar) {
    options += `  <div class="option">
      <span> <b>${cevap}</b>: ${soru.siklar[cevap]} </span>
      </div>
      `;
  }

  document.querySelector(".question_text").innerHTML = question;
  this.option_list.innerHTML = options;
  const option = this.option_list.querySelectorAll(".option");
  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};
UI.prototype.soruSayisiniGoster = function (soruSirasi, toplamSoru) {
  let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
  document.querySelector(".quiz-box .question_index").innerHTML = tag;
};

UI.prototype.skoruGoster = function (dogrCevapSay, toplamSoru) {
  let tag = `Toplam ${toplamSoru} sorudan ${dogrCevapSay} doğru cevap verdiniz`;
  document.querySelector(".score_box .score_text").innerHTML = tag;
};
