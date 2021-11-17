$('.carousel').carousel({
    fullWidth: true,
    indicators: true
});

$('i#prev').click(function() {
$('.carousel').carousel('prev');
});

$('i#next').click(function() {
$('.carousel').carousel('next');
});

$(document).ready(function(){
    $('.sidenav').sidenav();
});
