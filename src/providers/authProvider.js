const domain = "http://localhost:3333/api/";

const authProvider = {
  login: async (authdata) => {
    const request = new Request(domain + "users/login", {
      method: "POST",
      body: JSON.stringify({
        email: authdata.email,
        password: authdata.password,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      const auth = await response.json();
      localStorage.setItem("auth", JSON.stringify(auth));
    } catch (e) {
      throw new Error("Network error");
    }
  },
  // called when the user clicks on the logout button
  logout: async () => {
    try {
      const headers = new Headers({ "Content-Type": "application/json" });
      const { token } = JSON.parse(localStorage.getItem("auth"));
      headers.set("Authorization", `Bearer ${token}`);
      const request = new Request(domain + "users/me/logout", {
        method: "POST",
        headers: headers,
      });
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      localStorage.removeItem("auth");
      return Promise.resolve();
    } catch (e) {
        return Promise.resolve();
    }
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
  // ...
};

export default authProvider;
