var sIndex = 1;
show(sIndex);

function plus(n) {
  show(sIndex += n);
}

function currentSlide(n) {
  show(sIndex = n);
}

function show(n) {
  var i;
  var slides = document.getElementsByClassName("photos");
  if (n > slides.length) {sIndex = 1}    
  if (n < 1) {sIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[sIndex-1].style.display = "block";  
}