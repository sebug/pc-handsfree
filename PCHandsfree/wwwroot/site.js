const grammar = '#JSGF V1.0; grammar radios; one | two | three | four | five | ' +
    ' six | seven | eight | nine | ten | eleven | twelve | thirteen | fourteen | ' +
    ' fifteen | sixteen | seventeen | eighteen | nineteen | twenty | twenty-one | ' +
    ' twenty-two | twenty-three | twenty-four ;';
const recognition = new webkitSpeechRecognition();
const speechRecognitionList = new webkitSpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.continuous = false;
recognition.lang = 'en-US';
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
    const radio = event.results[0][0].transcript;
    diagnostic.textContent = 'Radio recognized: ' + radio;
};
