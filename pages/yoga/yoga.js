// Array of image paths (relative paths to the images folder)
const images = [
  "/Activity_app/images/image (1).jpg",
  "/Activity_app/images/image (2).jpg",
  "/Activity_app/images/image (3).jpg",
  "/Activity_app/images/image (4).jpg",
  "/Activity_app/images/image (1).png",
  "/Activity_app/images/image (2).png",
  "/Activity_app/images/image (3).png",
  "/Activity_app/images/image (4).png",
];
let currentIndex = 0;

// Function to update the image
function updateImage() {
  const imageElement = document.getElementById("slideshow-image");
  imageElement.src = images[currentIndex];
}

// Function to go to the next slide
function nextSlide() {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  updateImage();
}

// Initialize the first image
updateImage();

// Set up speech recognition using Webkit SpeechRecognition API
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.interimResults = false; // We don't need interim results, we just need the final result
recognition.continuous = true; // Enable continuous listening
recognition.lang = "en-US"; // Set the language

// Event listener for when speech is recognized
recognition.addEventListener("result", (event) => {
  const transcript =
    event.results[event.resultIndex][0].transcript.toLowerCase();
  console.log(`User said: ${transcript}`); // Log what the user is speaking

  if (transcript.includes("next")) {
    nextSlide(); // Move to the next slide when "next" is spoken
  }
});

// Error handler
recognition.addEventListener("error", (event) => {
  console.error("Speech recognition error detected:", event.error);
  document.getElementById("status").innerText =
    "Speech recognition error, please try again.";
});

// Start recognition automatically
recognition.addEventListener("end", recognition.start); // Restart recognition when it stops
recognition.start(); // Start listening automatically

// Update status text
document.getElementById("status").innerText = "Listening for commands...";
console.log("Listening for 'next' command...");
