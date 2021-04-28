const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabBody = tabs.querySelector(".tab-body");
let tabIndicator = tabs.querySelector(".tab-indicator");
let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

for(let i=0;i<tabHeaderNodes.length;i++){
  tabHeaderNodes[i].addEventListener("click",function(){
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderNodes[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyNodes[i].classList.add("active");
    tabIndicator.style.left = `calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
  });
}


$(function() {
	$('.hamburger-button').on('click', function(event){
	  event.preventDefault();
	  
	  $(this).toggleClass('active');
	  $('.overlay').toggleClass('visible');
  
	});
  });