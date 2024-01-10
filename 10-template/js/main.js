const circle = document.querySelector("#circle");
const articles = circle.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("mouseenter", (e) => {
    circle.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", (e) => {
    circle.style.animationPlayState = "running";
  });
});
