const quiz = new Quiz(sorular);
const ui = new UI();
ui.btn_start.classList.add("active");
let counter;
let counterLine;
// console.log(quiz.soruGetir());

ui.btn_start.addEventListener("click", function () {
  ui.quiz_box.classList.add("active");
  startTimer(10);
  startTimerLine();
  let soru = quiz.soruGetir();
  ui.soruGoster(soru);
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.next_btn.classList.remove("show");
  ui.btn_start.classList.remove("active");
});
ui.next_btn.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    quiz.soruIndex += 1;
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(10);
    startTimerLine();
    let soru = quiz.soruGetir();
    ui.soruGoster(soru);
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.next_btn.classList.remove("show");
  } else {
    console.log("quiz bitti");
    clearInterval(counter);
    clearInterval(counterLine);
    ui.quiz_box.classList.remove("active");
    ui.score_box.classList.add("active");
    ui.skoruGoster(quiz.dogrCevapSay, quiz.sorular.length);
  }
});

ui.btn_quit.addEventListener("click", function () {
  window.location.reload(); //sayfayı yenilemiş oluyoruz
});
ui.btn_replay.addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogrCevapSay = 0;
  ui.btn_start.click(); //js aracılığıyla tıklamış gibi yapmışl oluyoruz starta direk ilk soruay gidece
  ui.score_box.classList.remove("active");
});

// const option_list = document.querySelector(".option_list");
// const correctIcon = ` <div class="icon"><i class="fas fa-check"></i></div>`;
// const incorrectIcon = ` <div class="icon"><i class="fas fa-times"></i></div> `;

function optionSelected(option) {
  clearInterval(counter);
  clearInterval(counterLine);
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();
  if (soru.cevabiKontrolEt(cevap)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
    quiz.dogrCevapSay++;
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }
  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }
  ui.next_btn.classList.add("show");
}

function startTimer(time) {
  counter = setInterval(timer, 1000); // 1 sn bir timer fonksiyonunu çağırıcak
  function timer() {
    ui.time_second.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter); // bitirmiş oluyor süreyi
      ui.time_text.textContent = "Süre Bitti";
      let cevap = quiz.soruGetir().dogruCev;
      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent == cevap) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        } else {
          option.classList.add("incorrect");
          option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
        }
        option.classList.add("disabled");
      }
      ui.next_btn.classList.add("show");
    }
  }
}

function startTimerLine() {
  let line_width = 0;
  ui.time_line.style.width = line_width + "%";
  counterLine = setInterval(timer, 110);
  function timer() {
    line_width += 1;
    ui.time_line.style.width = line_width + "%";

    if (line_width >= 100) clearInterval(counterLine);
  }
}
