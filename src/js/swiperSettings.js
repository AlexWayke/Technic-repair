import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
let swiper

function renderSwiper(swiperName, pagName) {
  swiper = new Swiper(swiperName, {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    slidesOffsetBefore: 16,
    modules: [Pagination],
    pagination: {
      el: pagName,
      clickable: true
    }
  })
}

if (screen.width < 768) {
  renderSwiper('.swiper--first', '.swiper-pagination--first')
  renderSwiper('.swiper--second', '.swiper-pagination--second')
  renderSwiper('.swiper--third', '.swiper-pagination--third')
}

window.addEventListener('resize', function () {
  if (screen.width >= 768 && swiper) {
    console.log('swiper', swiper)
    swiper.destroy(true, true)
  } else {
    renderSwiper('.swiper--first', '.swiper-pagination--first')
    renderSwiper('.swiper--second', '.swiper-pagination--second')
    renderSwiper('.swiper--third', '.swiper-pagination--third')
  }
})
