(function(){

    'use strict';
     console.log('reading js');

    //open and close buttons to open and close the overlays

     const openBtns = document.querySelectorAll('.open');
     const closeBtns = document.querySelectorAll('.close');

    //when user clicks on the name, it opens to a specific picture attached to it
     for(const eachBtn of openBtns) {
         eachBtn.addEventListener('click', function(event){
             event.preventDefault();
             const thisBtn = event.target.id;
             document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
 
         });
     }
     
     //closes the overlay. there is an 'x' on the top right corner for the button
     for(const eachBtn of closeBtns) {
         eachBtn.addEventListener('click', function(event){
             event.preventDefault();
             document.querySelector('.showing').className = 'overlay hidden';
         });
     }
 
    //escape option to leave the overlay
     document.addEventListener('keydown', function(event){
         if(event.key === 'Escape'){
             document.querySelector('.showing').className = 'overlay hidden';
         }
     });



    }());