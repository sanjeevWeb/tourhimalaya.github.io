let menuBtn = document.getElementById('menuBtn');
// console.log(menuBtn);
let navlinks = document.getElementsByClassName('navlinks')[0];
// console.log(navlinks);
menuBtn.addEventListener('click',() => {
	
	navlinks.classList.toggle("mobileMenu");
})