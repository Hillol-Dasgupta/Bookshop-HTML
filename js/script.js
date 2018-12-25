//Large Carousel with Thumbnail Indicators

document.documentElement.setAttribute("lang", "en");
document.documentElement.removeAttribute("class");

axe.run( function(err, results) {
  console.log( results.violations );
} );

//Slick Carousel
$(document).ready(function(){
  $('#slick-slider').slick();
});