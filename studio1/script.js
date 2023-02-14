(function(){

    'use strict';
     console.log('reading js');

    const form = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    form.addEventListener('submit', function(event){

        event.preventDefault();

        const color = document.querySelector('#color').value;
        const color2 = document.querySelector('#color2').value;
        const adj = document.querySelector('#adj').value;
        const animal = document.querySelector('#animal').value;
        const food = document.querySelector('#food').value;
        const adj1 = document.querySelector('#adj1').value;
        const noun1 = document.querySelector('#noun1').value;
        const music = document.querySelector('#music').value;
        const hobby = document.querySelector('#hobby').value;
        const verb = document.querySelector('#verb').value;
        const adj2 = document.querySelector('#adj2').value;
        const love = document.querySelector('#love').value;

        let myText;

        if(color == ''){
            myText = "Please provide a color"
            document.querySelector(`#color`).focus();
        }
        else if(color2 == ''){
            myText = "Please provide another color"
            document.querySelector('#color2').focus();
        }
        else if(adj == ''){
            myText = "Please provide an adjective"
            document.querySelector('#adj').focus();
        }
        else if(animal == ''){
            myText = "Please provide a animal"
            document.querySelector('#animal').focus();
        }
        else if(food == ''){
            myText = "Please provide a food"
            document.querySelector('#food').focus();
        }
        else if(adj1 == ''){
            myText = "Please provide an adjective"
            document.querySelector('#adj1').focus();
        }
        else if(noun1 == ''){
            myText = "Please provide a noun"
            document.querySelector('#noun1').focus();
        }
        else if(music == ''){
            myText = "Please provide a music genre"
            document.querySelector('#music').focus();
        }
        else if(hobby == ''){
            myText = "Please provide a hobby"
            document.querySelector('#hobby').focus();
        }
        else if(verb == ''){
            myText = "Please provide a verb"
            document.querySelector('#verb').focus();
        }
        else if(adj2 == ''){
            myText = "Please provide an adjective"
            document.querySelector('#adj2').focus();
        }
        else if(love == ''){
            myText = "Please provide the name of your date"
            document.querySelector('#love').focus();
        }
        else{
            myText = `It's valentine's day today! Let’s plan it so you you have the best date ever. First, the outfit: you pick out a <b>${color}</b> top and <b>${color2}</b> bottoms. You are definitely going for the <b>${adj}</b> aesthetic! You will need to prepare a gift basket to surprise your boo. Stuff it with all of their favorite things, like a <b>${animal}</b> plushy, delicious <b>${food}</b>, and a lovely card that lets them know how much you love and appreciate them! Now time for the date planning. You guys decide to go to a <b>${adj1}</b> restaurant. It has a special dish called the <b>${noun1}</b> that is said to be very popular. The restaurant ambiance is amazing, there’s even a <b>${music}</b> band providing entertainment. Next, you guys do an activity together. You guys both share the hobby of <b>${hobby}</b>, so you decide to go to a place that specializes in it. You guys have a blast. The sun is about to set, you guys <b>${verb}</b> your way down to the beach to watch. The beautiful colors of pink and purple fill the sky, a very fitting color combination for the day! You guys share a <b>${adj2}</b> hug. The date is officially over, but remember, everyday is valentine’s day with <b>${love}</b> :) <3`;
            document.querySelector('#color').value='';
            document.querySelector('#color2').value='';
            document.querySelector('#adj').value='';
            document.querySelector('#animal').value='';
            document.querySelector('#food').value='';
            document.querySelector('#adj1').value='';
            document.querySelector('#noun1').value='';
            document.querySelector('#music').value='';
            document.querySelector('#hobby').value='';
            document.querySelector('#verb').value='';
            document.querySelector('#adj2').value='';
            document.querySelector('#love').value='';
        }

        madlib.innerHTML = myText;



    

    });

}());