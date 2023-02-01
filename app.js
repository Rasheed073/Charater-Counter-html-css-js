  var textareaEl = document.getElementById("textarea")
  var totalCounterEl = document.getElementById("total-counter")
  var remainingCounterEl = document.getElementById("remaining-counter")

  textareaEl.addEventListener("keyup", () =>{
        updateCounter()
  })
  pdateCounter ()

  function updateCounter (){
    totalCounterEl.innerText = textareaEl.value.length
    remainingCounterEl.innerText =  textareaEl.getAttribute("maxLength") - textareaEl.value.length 
  }

  