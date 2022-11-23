const btnMobile = document.querySelector(".menu-btn");
const menuMobile = document.querySelector('.mobile__links');


btnMobile .addEventListener("click", (e) =>	 {
	menuMobile.classList.toggle('collapsed');
})
