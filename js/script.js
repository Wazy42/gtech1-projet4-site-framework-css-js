$('.carousel').carousel({
    fullWidth: true
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: false
});

$('.moveNextCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
});

$('.movePrevCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
});

$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$(document).ready(function(){
    $('.modal').modal();
});