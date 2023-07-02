window.addEventListener("load", () => {
  const quest = document.querySelectorAll(".div");
  const ans = document.querySelectorAll(".resp");
  const quest2 = document.querySelectorAll(".quest");
  const seta = document.querySelectorAll(".seta");



  function changeColor(shouldChange) {
    const divMenor = document.querySelector('.div-menor');
    if (shouldChange) {
      divMenor.classList.add('paragrafo-hover');
    } else {
      divMenor.classList.remove('paragrafo-hover');
    }
  }
  


  seta.forEach((i) => {
    i.classList.add("circle");
    i.classList.add("reverse");
  })

  function showAns() {
    let pick = this;
    const qsArray = Array.from(quest);
    const asArray = Array.from(ans);
    const quest2a = Array.from(quest2);
    const aSeta = Array.from(seta);

    qsArray.forEach((i, index) => {
      if (i === pick) {
        asArray[index].classList.toggle("active");
        i.classList.toggle("exp");
        aSeta[index].classList.toggle("circle");
        aSeta[index].classList.remove("reverse");
      } else {
        aSeta[index].classList.toggle("circle");
        aSeta[index].classList.remove("reverse");
      }
      if (asArray[index].classList.contains("active")) {
        quest2a[index].style.fontWeight = 700;
        aSeta[index].classList.add("circle");
      } else {
        quest2a[index].style.fontWeight = 400;
        // aSeta[index].classList.remove("circle");
        aSeta[index].classList.add("reverse");
      }
    });
  }

  quest.forEach((itens) => {
    itens.addEventListener("click", showAns);
  });
});
