const startBtn = document.getElementById('start-btn');
const output = document.getElementById('output');

if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true; // Keep recognizing until stopped
    recognition.interimResults = true; // Show interim results

    recognition.onstart = () => {
        console.log('Voice recognition started. Speak into the microphone.');
    };

    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        output.textContent = transcript;
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error detected: ' + event.error);
    };

    recognition.onend = () => {
        console.log('Voice recognition ended.');
    };

    startBtn.addEventListener('click', () => {
        recognition.start();
    });
} else {
    output.textContent = 'Your browser does not support speech recognition.';
}
