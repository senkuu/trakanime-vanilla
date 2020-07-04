class LoginFormManager {
  constructor() {
    this.form = document.getElementById("loginForm");
    this.email = document.getElementById("email");
    this.password = document.getElementById("password");
  }

  init() {
    this.form.addEventListener("submit", async (e) => {
      e.preventDefault();
      await this.login();
    });
  }

  async login() {
    const response = await fetch("http://localhost:8000/api/login_check", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.email.value,
        password: this.password.value,
      }),
    });

    if (response.status === 200) {
      const responseJson = await response.json();
      window.localStorage.setItem("jwt_token", await responseJson.token);
    }
  }
}

export default LoginFormManager;
