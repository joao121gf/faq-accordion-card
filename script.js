window.addEventListener("load", () => {
  const quest = document.querySelectorAll(".div");
  const ans = document.querySelectorAll(".resp");
  const quest2 = document.querySelectorAll('.quest')

  function showAns() {
    let pick = this
    const qsArray = Array.from(quest)
    const asArray = Array.from(ans)
    const quest2a = Array.from(quest2)



    qsArray.forEach((i, index) =>{
        if (i === pick){
            asArray[index].classList.toggle('active')
        }else{
            asArray[index].classList.remove('active')
        }
        if(asArray[index].classList.contains('active')){
            quest2a[index].style.fontWeight = 700
        }else{
            quest2a[index].style.fontWeight = 400

        }
    })


  }

  quest.forEach((itens) => {
    itens.addEventListener("click", showAns);
  });
});
