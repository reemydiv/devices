var sliderImages = Array.from(document.querySelectorAll(".images img"));
var sliderCount =sliderImages .length;
var currentSlider = 1;
 var prevButton =document.getElementById('pre');
 var nextButton =document.getElementById('next');

 
nextButton.onclick = nextClick;
prevButton.onclick = prevClick;
 
for (var i=1; i<=sliderCount; i++){

}
var sliderBounts = Array.from(document.querySelectorAll("#list-ul li"));

  for( var i=0; i< sliderBounts.length; i++){
   sliderBounts[i].onclick =function (){
   currentSlider=parseInt(this.setAttribute('data-index'));
      theCheak();
   }
}

theCheak();

function nextClick(){
   if(nextButton.classList.contains('disabled')){
   
   }
else{
   currentSlider++;
   theCheak();
   
}

}

function prevClick(){

   if(prevButton.classList.contains('disabled')){

}
else{
currentSlider--;
theCheak();
}



}
   function theCheak(){
   removeAllActive();
    sliderImages[currentSlider - 1].classList.add("active");
    sliderBounts[currentSlider - 1].classList.add("active");
    if(currentSlider==1){
      prevButton.classList.add('disabled');
    }
    else{
    prevButton.classList.remove('disabled');
   }

    if(currentSlider==5){
      nextButton.classList.add('disabled');
    }
    else{
    nextButton.classList.remove('disabled');
   }

}

  function removeAllActive(){
   sliderImages.forEach(function(img){
      img.classList.remove("active")

   });
      
   sliderBounts.forEach(function(li){
      li.classList.remove("active")

   });

  }
  setInterval(nextClick,2000);



 var myImage = document.getElementById('image');
var images =[
"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Sports/XCM_Manual_1529683_5283153_1500x200_2X.jpg",
"https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2022/NTAWeclomePage/XCM_Manual_1437710_4757741_1500x250_2X.jpg"]
var i = 0;


function slideShow(){

      myImage.setAttribute('src', images[i]); 
      if( i == images.length-1){
         i==0;

      }
      else{
         i++;
      }
   
setTimeout(function() {
    slideShow();
} ,2000)


}
 
 slideShow();


 

 var imagesPart = Array.from (document.querySelectorAll('.Batalon img')); 
 var imagesCount =imagesPart.length;
var pointPart = Array.from(document.querySelectorAll('.points  div'));
   



var i = 0
 function slideImage(){
   imagesPart[i].classList.add("active");

      if(i == imagesCount - 1){  
         i==0;
      }else{
         i++
      }
         


   
 setInterval(function(){
  
slideImage();}

 ,1000 ) 


 }

 slideImage();



 
 