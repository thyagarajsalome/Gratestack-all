// Get UI elements
const voiceSelect = document.querySelector("select");
const textInput = document.querySelector("textarea");
const speakButton = document.querySelector("button");

// Initialize speech synthesis
const speech = new SpeechSynthesisUtterance();
let voices = [];

// Load voices and populate select
function loadVoices() {
  voices = window.speechSynthesis.getVoices();

  // Set default voice
  if (voices.length > 0) {
    speech.voice = voices[0];
  }

  // Clear existing options
  voiceSelect.innerHTML = "";

  // Add voices to select
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
}

// Handle voice loading
if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

// Handle voice selection
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// Handle speak button click
speakButton.addEventListener("click", () => {
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Get and set new text
  speech.text = textInput.value;

  // Speak if there's text to speak
  if (speech.text.trim() !== "") {
    window.speechSynthesis.speak(speech);
  }
});
