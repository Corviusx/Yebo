var slideIndex = 0;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide_active");
  var dots = document.getElementsByClassName("control_button");
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

var timer = setInterval(function(){
  showSlides(slideIndex)
}, 5000);
