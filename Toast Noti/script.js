let toastBox = document.getElementById("toastBox");

// Define messages with proper string concatenation
let successMsg = {
  text: '<i class="fa-solid fa-circle-check"></i> Successfully submitted',
  type: "success",
};

let errorMsg = {
  text: '<i class="fa-solid fa-square-xmark"></i> Please fix the error',
  type: "error",
};

let invalidMsg = {
  text: '<i class="fa-solid fa-triangle-exclamation"></i> Invalid input, check again',
  type: "invalid",
};

// Show toast with the specified message
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(msg.type);
  toast.innerHTML = msg.text;
  toastBox.appendChild(toast);

  // Automatically remove toast after 5 seconds
  setTimeout(() => {
    // Add fade-out animation
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.5s ease";

    // Remove element after animation
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 4500);
}
