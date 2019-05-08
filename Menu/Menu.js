
const toggleMenu = () => {
  const menuList = document.querySelectorAll("div ul li");
  if (menu.style.display === "none") {
      menu.style.display === "block";
      menuList.style.display === "block";
      
  } 
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', toggleMenu());