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

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });