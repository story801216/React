document.getElementById("total").addEventListener(
  "click",
  function () {
    document.getElementById('total').innerHTML =
      +(document.getElementById('total').innerHTML) + 1
  }
)