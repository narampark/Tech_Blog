const techLoginFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username-tech-login").value.trim();
  const password = document.querySelector("#password-tech-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const techLoginForm = document.querySelector(".tech-login-form");
if (techLoginForm) {
  techLoginForm.addEventListener("submit", techLoginFormHandler);
}
