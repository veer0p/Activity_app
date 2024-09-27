// Show audio player
function showAudioPlayer(bookPath) {
  console.log(`Playing audio from: ${bookPath}`);
  document.getElementById("scroll-wrap").classList.add("hidden");
  document.getElementById("audio-player").classList.remove("hidden");
  const audioSource = document.getElementById("audio-source");
  audioSource.src = bookPath; // Use absolute path directly
  document.getElementById("audio").load(); // Reload the audio source
  console.log(`Audio source set to: ${audioSource.src}`);
}

// Show PDF viewer
function showPDFViewer(bookPath) {
  console.log(`Reading PDF from: ${bookPath}`);
  document.getElementById("scroll-wrap").classList.add("hidden");
  document.getElementById("pdf-viewer").classList.remove("hidden");
  const pdfSource = document.getElementById("pdf-source");
  pdfSource.src = bookPath; // Use absolute path directly
  console.log(`PDF source set to: ${pdfSource.src}`);
}

// Download book
function downloadBook(bookPath) {
  const link = document.createElement("a");
  link.href = bookPath; // Use absolute path directly
  link.download = bookPath.split("\\").pop(); // Extracts file name for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  console.log(`Downloading book from: ${link.href}`);
}

// Go back to book list
function backToList() {
  document.getElementById("audio-player").classList.add("hidden");
  document.getElementById("pdf-viewer").classList.add("hidden");
  document.getElementById("scroll-wrap").classList.remove("hidden");
  console.log("Back to book list");
}
