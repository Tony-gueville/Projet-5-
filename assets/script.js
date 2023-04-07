
const btnleft = document.querySelector(".arrow_left");
const btnright = document.querySelector(".arrow_right");
const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
const images = slides.map(slide => slide.image);
const tagLines = slides.map(slide => slide.tagLine);
const image = document.querySelector(".banner-img");
const tagline = document.querySelector(".banner-tagline");

let compteur = 0;


btnleft.addEventListener("click", () => {
  compteur = (compteur - 1 + images.length) % images.length;
  image.src = images[compteur];
  tagline.innerHTML = tagLines[compteur];
  updateDots();
});

btnright.addEventListener("click", () => {
  compteur = (compteur + 1) % images.length;
  image.src = images[compteur];
  tagline.innerHTML = tagLines[compteur];
  updateDots();
});

function updateDots() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach(dot => {
	  dot.classList.remove('dot_selected');
	});
	dots[compteur].classList.add('dot_selected');
  }