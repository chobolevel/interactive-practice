window.addEventListener("load", (e) => {
  const grid = new Isotope("section", {
    // 배치할 요소의 상위 요소
    itemSelector: "article", // 배치할 요소
    columnWidth: "article", // 너빗값을 구할 요소
    transitionDuration: "0.5s", // 화면 재배치 시 요소 움직이는 속도
  });
  const $btns = document.querySelectorAll("main ul li");
  $btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const sort = e.currentTarget.querySelector("a").getAttribute("href");
      grid.arrange({
        filter: sort,
      });
      $btns.forEach((btn) => {
        btn.classList.remove("on");
      });
      e.currentTarget.classList.add("on");
    });
  });
});
