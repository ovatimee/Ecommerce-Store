// copy menu for mobile

const copyMenu = () => {
  const dptCategory = document.querySelector(".dpt-cat");
  const dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  const mainNav = document.querySelector(".header-nav nav");
  const navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  const topNav = document.querySelector(".header-top .wrapper");
  const topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
};
copyMenu();

const menuBtn = document.querySelector(".trigger"),
  closeBtn = document.querySelector(".t-close"),
  addClass = document.querySelector(".site");
menuBtn.addEventListener("click", () => {
  addClass.classList.toggle("showmenu");
});

closeBtn.addEventListener("click", () => {
  addClass.classList.remove("showmenu");
});

const submenu = document.querySelectorAll(".has-child .icon-small");
function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove(".expand") : null
  );
  if (this.closest(".has-child").classList != "expand")
    this.closest(".has-child").classList.toggle("expand");
}

submenu.forEach((menu) => menu.addEventListener("click", toggle));

// slider

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
});

// show search on mobile

const searchBtn = document.querySelector(".t-search"),
  tClose = document.querySelector(".search-close"),
  showClass = document.querySelector(".site");

searchBtn.addEventListener("click", () => {
  showClass.classList.toggle("showsearch");
});

tClose.addEventListener("click", () => {
  showClass.classList.remove("showsearch");
});

// show dpt menu

const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
  dptClass = document.querySelector(".site");
  dptButton.addEventListener("click", () => {
  dptClass.classList.toggle("showdpt");
});

const productThumb = new Swiper(".small-image", {
  loop: true,
  spaceBetween: 10,
  slidesPerview: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    },
  }
});

const productBig = new Swiper(".big-image", {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: productThumb,
  }
})

// Stock Products Bar Width Percentage

let stocks = document.querySelectorAll('.products .stock')
for(let i = 0; i < stocks.length; i++) {
  let stock = stocks[i].dataset.stock,
    available = stocks[i].querySelector('.qty-available').innerHTML,
    sold = stocks[i].querySelector('.qty-sold').innerHTML,
    percent = sold*100/stock;
    stocks[i].querySelector('.available').style.width = percent + '%'
}


// show mobile cart
const divToShow = ".mini-cart"
const divPopUp = document.querySelector('.mini-cart'),
  divTrigger = document.querySelector('.cart-trigger')

  divTrigger.addEventListener('click', () => {
    setTimeout(() => {
      if(!divPopUp.classList.contains('show')){
        divPopUp.classList.add('show');
      }
    }, 250)
  })

  document.addEventListener('click', (e)=> {
    const isClosest = e.target.closest(divToShow)
    if(!isClosest && divPopUp.classList.contains('show')) {
      divPopUp.classList.remove('show')
    }
  })

  // show modal onload


  window.onload = () => {
    document.querySelector('.site').classList.toggle('showmodal')
  }

  const closeModalBtn = document.querySelector('.modalclose')
    closeModalBtn.addEventListener('click', ()=> {
      document.querySelector('.site').classList.remove('showmodal')
    })


    const FtoShow = '.filter';
    const FpopUp = document.querySelector(FtoShow)
    const Ftrigger = document.querySelector('.filter-trigger')

    Ftrigger.addEventListener('click', () => {
      setTimeout(() => {
        if (!FpopUp.classList.contains('show')) {
          FpopUp.classList.add('show')
        }
      }, 250)

    })

    // close by clicking outside

    document.addEventListener('click', (e) => {
      const isClosest = e.target.closest(FtoShow)
      if (!isClosest && FpopUp.classList.contains('show')) {
        FpopUp.classList.remove('show')
      }
    })


    // Product On Click To Products Page

    //get product


    //add click event 


  // change product page info on click