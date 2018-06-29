angular.module('citiesApp')
.controller('aboutController',['$scope', function($scope){
 
  self = this;
  self.slideIndex = 1;
  self.num = 'sdjfkjhfdk';
  self.showSlides = function(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {self.slideIndex = 1}    
    if (n < 1) {self.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[self.slideIndex-1].style.display = "block";  
    dots[self.slideIndex-1].className += " active";
  }
  self.showSlides(self.slideIndex);
  
  self.plusSlides = function(n) {
    self.showSlides(self.slideIndex += n);
  }
  
  self.currentSlide = function(n) {
    self.showSlides(self.slideIndex = n);
  }
  
 self.slides_array = ["https://upload.wikimedia.org/wikipedia/commons/8/88/Kikar_Hamitnadvim%2C_Beersheba.jpg","https://upload.wikimedia.org/wikipedia/commons/6/62/Tel_Be%27er_Sheva_Overview_2007041.JPG","https://upload.wikimedia.org/wikipedia/commons/8/88/Kikar_Hamitnadvim%2C_Beersheba.jpg"]

  }]);