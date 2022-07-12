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

const submenu = document.querySelectorAll(".has-child .icon-small");

// const toggle = (e) => {
//     e.preventDefault();
//     submenu.forEach(item => item != this? item.closest('.has-child').classList.remove('.expand') : null);
//     if(this.closest('.has-child').classList != 'expand')
//     this.closest('.has-child').classList.toggle('expand')
// }

const toggle = (e) => {
    e.preventDefault();
    submenu.forEach(item => console.log(this))
}

submenu.forEach((menu) => menu.addEventListener("click", toggle));
