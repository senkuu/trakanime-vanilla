class Router {
  constructor() {
    this.routes = [];
  }

  get(uri, callback) {
    const route = {
      uri: uri,
      callback: callback,
    };
    this.routes.push(route);
  }

  init() {
    this.routes.some((route) => {
      const regEx = new RegExp(`^${route.uri}$`);
      const path = window.location.pathname;

      if (path.match(regEx)) {
        const req = { path: path };
        return route.callback.call(this, req);
      }
    });
  }
}

export async function loadView(app, view) {
  app.innerHTML = await view;
}

export async function goTo(route) {
  window.history.pushState("", "", route);
}

export default Router;
