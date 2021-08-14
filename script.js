const input = document.querySelector('.textarea');
const button = document.querySelector('.button');
const output = document.querySelector('.output')


var serverURL = '	https://api.funtranslations.com/translate/ferb-latin.json';

function getTranslatedURL(text){
   return serverURL + '?' + 'text=' + text;
}
 

 button.addEventListener('click',function clickHandler(){
   var inputValue = input.value;
   
       fetch(getTranslatedURL(inputValue))
       .then(response => response.json())
       .then(json => {
               let translatedText = json.contents.translated;
              output.innerText = translatedText;
            
            
           
       
       });
   });

 










 
