const API_BASE = "http://localhost:5000";

// REGISTER
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    try {
      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Registration failed");
      }

      alert("Registered Successfully");
    } catch (error) {
      alert(`Connection error. Make sure the backend is running on ${API_BASE}`);
      console.error("Register error:", error);
    }
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const loginData = {
      email: document.getElementById("loginEmail").value,
      password: document.getElementById("loginPassword").value,
    };

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Login failed");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);
      alert("Login Successful");
    } catch (error) {
      alert(`Connection error. Make sure the backend is running on ${API_BASE}`);
      console.error("Login error:", error);
    }
  });
}
