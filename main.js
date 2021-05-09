// document.querySelector('.toggler').onclick = () => {
//     document.querySelector('.nav').classList.toggle('open');
//   }
var options = {
  accessibility: true,
  prevNextButtons: true,
  wrapAround: true,
  pageDots: false,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15
  }
};

var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = (slide.target + flkty.x) * -1/3;
    image.style.backgroundPosition = x + 'px';
  });
});


$(document).ready(function(){
$(".b").click(function(){
    $(this).toggleClass("b");
    $(this).toggleClass("b-selected");
 });
});

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellalign: 'right',
  pageDots: false,
  wrapAround: true,
  groupCells: '20%',
  selectedAttraction: 0.03,
  friction: 0.15
});
var flkty = new Flickity( '.carousel', {
  // options
});