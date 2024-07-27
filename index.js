const menu = document.getElementById("menu");
const headerTable = document.getElementById("header-table");
const showMenu = () => {
  headerTable.classList.toggle("hidden");
};
menu.addEventListener("click", showMenu);
