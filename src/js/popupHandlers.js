const popupElements = [
  { 'btn': '.header__burger', 'block': '.menu' },
  { 'btn': '.menu__background', 'block': '.menu' },
  { 'btn': '.menu__close', 'block': '.menu' },
  { 'btn': '.button--call', 'block': '.callback--call' },
  { 'btn': '.button--call-menu', 'block': '.callback--call' },
  { 'btn': '.callback__close--call', 'block': '.callback--call' },
  { 'btn': '.callback__background--call', 'block': '.callback--call' },
  { 'btn': '.button--form', 'block': '.callback--form' },
  { 'btn': '.callback__close--form', 'block': '.callback--form' },
  { 'btn': '.callback__background--form', 'block': '.callback--form' },
  { 'btn': '.button--form-menu', 'block': '.callback--form' }
]

popupElements.forEach(function (popup) {
  let btn = document.querySelector(popup.btn)
  btn.addEventListener('click', function () {
    let block = document.querySelector(popup.block)

    block.classList.toggle('active')
  })
})
