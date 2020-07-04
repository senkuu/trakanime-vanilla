import { goTo } from "./router";

class InternalLinkManager {
  constructor() {
    this.links = document.querySelectorAll("[data-internal-link]");
  }

  init() {
    this.links = document.querySelectorAll("[data-internal-link]");

    this.links.forEach((link) => {
      link.addEventListener("click", (e) => {
        goTo(link.getAttribute("data-internal-link"));
      });
    });
  }
}

export default InternalLinkManager;
