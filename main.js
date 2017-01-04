$(document).ready(function (){

// on page load hide accordion body
  var headBSlide = $('.headB');
  // headBSlide.hide();

  $('.click').click(function(){
    if(headBSlide.is(':hidden')){
        headBSlide.slideDown(450);
    }
   else{
      headBSlide.slideUp(400);
    }
  });



});