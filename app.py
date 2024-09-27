from flask import Flask, request, jsonify
import speech_recognition as sr

app = Flask(__name__)

@app.route('/recognize', methods=['POST'])
def recognize():
    # Initialize the recognizer
    recognizer = sr.Recognizer()

    # Get the audio file from the request
    audio_file = request.files['file']

    # Use the audio file for recognition
    with sr.AudioFile(audio_file) as source:
        audio_data = recognizer.record(source)
        try:
            # Recognize speech using Google Web Speech API
            text = recognizer.recognize_google(audio_data)
            return jsonify({'transcript': text})
        except sr.UnknownValueError:
            return jsonify({'error': 'Could not understand audio'})
        except sr.RequestError:
            return jsonify({'error': 'Could not request results from Google Speech Recognition service'})

if __name__ == '__main__':
    app.run(debug=True)
