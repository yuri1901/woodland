const swiper = new Swiper('.swiper', {
    loop: false, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
    slideChange: function () {
      if (this.activeIndex === 0) {
        this.allowSlidePrev = false;
      } else {
        this.allowSlidePrev = true; 
      }
    },
  });
  
function switchProduct(buttons) {
    const btns = document.querySelectorAll(buttons);
    let dateBtns; 
    for (const item of btns) {
        item.addEventListener('click', () => {
            btns.forEach(item => item.classList.remove('tab-selected'));
            item.classList.add('tab-selected')
            dateBtns = item.dataset.tab
            slider('.intro article', dateBtns);
        })
    }

    function slider(blocks, dateBtns) {
        const blcs = document.querySelectorAll(blocks);
        blcs.forEach(item => {
            item.classList.remove("active", "inactive");
            if(item.dataset.tablist === dateBtns) {
                item.classList.add("active")
            } else {
                item.classList.add("inactive");
            }
        })
    }
}

switchProduct('.tablist button');

