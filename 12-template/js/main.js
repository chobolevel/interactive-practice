const $section = document.querySelector("section");
const $articles = $section.querySelectorAll("article");
const $audios = $section.querySelectorAll("audio");
const $btnPrev = document.querySelector(".btnPrev");
const $btnNext = document.querySelector(".btnNext");
const DEG = 45;
const len = $articles.length - 1;

let num = 0;
let active = 0;

$articles.forEach((article, idx) => {
  const $pic = article.querySelector(".pic");
  const $play = article.querySelector(".play");
  const $pause = article.querySelector(".pause");
  const $load = article.querySelector(".load");
  article.style.transform = `rotate(${idx * DEG}deg) translateY(-100vh)`;
  $pic.style.backgroundImage = `url(./img/member${idx + 1}.jpg)`;
  $play.addEventListener("click", (e) => {
    const isActive = article.classList.contains("on");
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
  $pause.addEventListener("click", (e) => {
    const isActive = article.classList.contains("on");
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.remove("on");
      e.currentTarget.closest("article").querySelector("audio").pause();
    }
  });
  $load.addEventListener("click", (e) => {
    const isActive = article.classList.contains("on");
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").load();
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
});
$btnPrev.addEventListener("click", (e) => {
  initMusic();
  num++;
  $section.style.transform = `rotate(${num * DEG}deg)`;
  active === 0 ? (active = len) : active--;
  activation(active, $articles);
});
$btnNext.addEventListener("click", (e) => {
  initMusic();
  num--;
  $section.style.transform = `rotate(${num * DEG}deg)`;
  active === len ? (active = 0) : active++;
  activation(active, $articles);
});

function activation(index, lists) {
  lists.forEach((list) => {
    list.classList.remove("on");
  });
  lists[index].classList.add("on");
}
function initMusic() {
  $audios.forEach((audio) => {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
  });
}
