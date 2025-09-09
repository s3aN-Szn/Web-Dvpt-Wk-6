// =============================
// Part 1: Event Handling
// =============================
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {
  message.textContent = "🎉 You clicked the button!";
});

// =============================
// Part 2: Interactive Features
// =============================

// 1. Light/Dark Mode Toggle
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

// 3. Collapsible FAQ
const faqToggle = document.querySelector(".faq-toggle");
const faqAnswer = document.querySelector(".faq-answer");

faqToggle.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "block" ? "none" : "block";
});

// =============================
// Part 3: Form Validation
// =============================
const form = document.getElementById("signupForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

// Email regex (basic validation)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  let valid = true;

  // Validate Name
  if (nameField.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  if (!emailRegex.test(emailField.value)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password
  if (passwordField.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Final check
  if (valid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = "❌ Please fix the errors above.";
    formMessage.style.color = "red";
  }
});
