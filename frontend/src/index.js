import "./style.css";

import Router, { loadView } from "./js/router";

import LoginFormManager from "./js/loginFormManager";
import RegisterFormManager from "./js/registerFormManager";
import InternalLinkManager from "./js/internalLinkManager";
import AnimeManager from "./js/animeManager";
import IndexManager from "./js/indexManager";

const pages = {
  home: import("./views/home.html"),
  login: import("./views/login.html"),
  register: import("./views/register.html"),
};

const app = document.getElementById("app");

const router = new Router();
const internalLinkManager = new InternalLinkManager();
const animeManager = new AnimeManager();

router.get("/", async () => {
  await loadView(app, pages.home);
  const indexManager = new IndexManager(animeManager);
  await indexManager.init();
});

router.get("/login", async () => {
  await loadView(app, pages.login);
  const loginFormManager = new LoginFormManager();
  loginFormManager.init();
});

router.get("/register", async () => {
  await loadView(app, pages.register);
  const registerFormManager = new RegisterFormManager();
  registerFormManager.init();
  internalLinkManager.init();
});

router.init();
