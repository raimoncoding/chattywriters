

const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });

  const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // add transition effect
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = "test.html";
    }, 500); // set delay to match transition time
  });
});
