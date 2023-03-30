var menuItems = document.querySelectorAll("nav ul li a");

// Agregar un evento de clic a cada elemento de menú
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function(e) {
    e.preventDefault();
    var subMenu = this.nextElementSibling;
    if (subMenu.style.display === "block") {
      subMenu.style.display = "none";
      this.classList.remove("active");
    } else {
      subMenu.style.display = "block";
      this.classList.add("active");
    }
  });
}

// Cerrar el submenú cuando se hace clic en cualquier parte de la página
document.addEventListener("click", function(e) {
  var target = e.target;
  if (!target.closest("nav")) {
    var subMenus = document.querySelectorAll("nav ul ul");
    for (var i = 0; i < subMenus.length; i++) {
      subMenus[i].style

 
