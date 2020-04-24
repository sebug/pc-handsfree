const recognition = new webkitSpeechRecognition();
const speechRecognitionList = new webkitSpeechGrammarList();
if (grammar) {
    grammar = grammar.replace('&lt;', '<').replace('&gt;', '>');
}
speechRecognitionList.addFromString(grammar, 1);
recognition.grammar = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'fr-CH';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector('.output p');

document.body.onclick = () => {
    try {
        recognition.start();
    } catch (e) {
        console.log(e);
    }
    console.log('Ready to receive a radio number');
};

recognition.onresult = (event) => {
    let radio = event.results[0][0].transcript;
    if (radio) {
        radio = radio.toLowerCase();
        radio = radio.replace('voilà', 'vala');
        radio = radio.replace('gala', 'vala');
        radio = radio.replace('la la', 'vala');
        radio = radio.replace('valence', 'vala');
        radio = radio.replace('fixe', 'fix');
        radio = radio.toUpperCase();
    }
    console.log(event.results);
    diagnostic.textContent = 'Radio recognized: ' + radio;
};

recognition.onnomatch = (event) => {
    console.log(event);
};