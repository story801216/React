document.getElementById('add').addEventListener(
  'click',
  function () {
    document.getElementById('total').innerHTML =
      +(document.getElementById('total').innerHTML) + 1
  }
)

document.getElementById('sub').addEventListener('click', function () {
  document.getElementById('total').innerHTML =
    +document.getElementById('total').innerHTML - 1
})