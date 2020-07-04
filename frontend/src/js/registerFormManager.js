import { goTo } from "./router";

class RegisterFormManager {
  constructor() {
    this.form = document.getElementById("registerForm");
    this.username = document.getElementById("username");
    this.email = document.getElementById("email");
    this.password = document.getElementById("password");
  }

  init() {
    this.form.addEventListener("submit", async (e) => {
      e.preventDefault();
      await this.register();
    });
  }

  async register() {
    const formData = new FormData();
    formData.append("email", this.email.value);
    formData.append("username", this.username.value);
    formData.append("password", this.password.value);

    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        Accept: "*/*",
      },
      body: new URLSearchParams(formData),
    });

    goTo("/login");
  }
}

export default RegisterFormManager;
