const showBtns = document.querySelectorAll('.more-btn')

showBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    let container = btn.closest('section')
    let contentBlock = container.querySelector('.more-block')
    contentBlock.classList.toggle('show')
  })
})
