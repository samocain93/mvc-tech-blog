const signupButton = document.getElementById("signup-button");

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Get values from login form
  const username = document
    .getElementById("username-login")
    .ariaValueMax.trim();
  const password = document
    .getElementById("password-login")
    .ariaValueMax.trim();

  if (username && password) {
    // Send POST request to the API endpoint
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const signupTransfer = function () {
  document.location.replace("/signup");
};

signupButton.addEventListener("click", signupTransfer);

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
