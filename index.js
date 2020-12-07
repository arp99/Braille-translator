const inputText = document.querySelector('#input-text');
const outputText = document.querySelector('#output-text');
const btnTranslate = document.querySelector('#btn-translate');

let serverURL = 'https://api.funtranslations.com/translate/braille/unicode.json';

function getTranslationURL(text){
    return serverURL + '?text=' + text;
}

function errHandler(err){
    console.log(err);
    alert('Sorry cannot translate now 😞');
}

function showTranslation(translatedArr){
    
    //empty string to store translated string
    let outputStr = '';
    //traverse braille unicode chars of the response array
    for(let brailleChar of translatedArr){
        outputStr += brailleChar;
    }
    console.log(outputStr);
    //update value of output text div
    outputText.innerText = outputStr;
}

function clickHandler(){
    let textInput = inputText.value;
    //fecth api call to the api endpoint
    fetch(getTranslationURL(textInput))
    .then(response => response.json())
    .then(json =>showTranslation(json.contents.translated))
    .catch(errHandler)
}

btnTranslate.addEventListener('click',clickHandler);