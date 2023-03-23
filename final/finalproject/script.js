(function(){

    'use strict';
     console.log('reading js');

    const form = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    form.addEventListener('submit', function(event){

        event.preventDefault();

        const animal = document.querySelector('#animal').value;
        const snack = document.querySelector('#snack').value;
        const food = document.querySelector('#food').value;
        const music = document.querySelector('#music').value;
        const hobby = document.querySelector('#hobby').value;
        const love = document.querySelector('#love').value;

        let myText;
        if(animal == ''){
            myText = "Please provide a animal"
            document.querySelector('#animal').focus();
        }
        else if(snack == ''){
            myText = "Please provide a snack"
            document.querySelector('#snack').focus();
        }
        else if(food == ''){
            myText = "Please provide a cuisine"
            document.querySelector('#food').focus();
        }
        else if(music == ''){
            myText = "Please provide a music genre"
            document.querySelector('#music').focus();
        }
        else if(hobby == ''){
            myText = "Please provide a hobby"
            document.querySelector('#hobby').focus();
        }
        else if(love == ''){
            myText = "Please provide the name of your date"
            document.querySelector('#love').focus();
        }
        else{
            myText = `It's valentine's day today! Let’s plan it so you you have the best date ever. You will need to prepare a gift basket to surprise your boo. Stuff it with all of their favorite things, like a <b>${animal}</b> plushy, delicious <b>${snack}</b>, and a lovely card that lets them know how much you love and appreciate them! Now time for the date planning. You guys decide to go to a <b>${food}</b> restaurant. The restaurant ambiance is amazing, there’s even a <b>${music}</b> band providing entertainment. Next, you guys do an activity together. You guys both share the hobby of <b>${hobby}</b>, so you decide to go to a place that specializes in it. You guys have a blast.The sun is about to set, you guys make your way down to the beach to watch. The beautiful colors of pink and purple fill the sky, a very fitting color combination for the day! You guys share a lovely hug. The date is officially over, but remember, everyday is valentine’s day with <b>${love}</b> '*•.¸♡ ♡¸.•*'`;
            document.querySelector('#animal').value='';
            document.querySelector('#snack').value='';
            document.querySelector('#food').value='';
            document.querySelector('#music').value='';
            document.querySelector('#hobby').value='';
            document.querySelector('#love').value='';
        }

        madlib.innerHTML = myText;

    });

    document.querySelector('.open').addEventListener('click', function(event){
        event.preventDefault;
        document.getElementById('overlay').className = 'showing';


    });

    document.querySelector('.close').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape'){
            document.getElementById('overlay').className = 'hidden';        }
    });

}());