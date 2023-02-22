const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById("username-signup").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("Sign up succesful");

      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .getElementById("signup-form")
  .addEventListener("submit", signupFormHandler);
