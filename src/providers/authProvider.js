
const { REACT_APP_API_URL: API_URL } = process.env;

const authProvider = {
  login: async (authdata) => {
    const request = new Request(API_URL + "/users/login", {
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
      const request = new Request(API_URL + "/users/me/logout", {
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
  getIdentity: async () => {
    console.log("get identity called");
    try {
      const headers = new Headers({ "Content-Type": "application/json" });
      const { token } = JSON.parse(localStorage.getItem("auth"));
      headers.set("Authorization", `Bearer ${token}`);
      const request = new Request(API_URL + "/users/me", {
        method: "POST",
        headers: headers,
      });
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      const auth = await response.json();
      const { id, name, manifestation_id } = auth;
      return Promise.resolve({ id, name, manifestation_id});
    } catch (e) {
      throw new Error("Network error");
    }
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    console.log("permissions called");
    const role = JSON.parse(localStorage.getItem("auth")).user.superadmin
      ? "admin"
      : "user";
    return role ? Promise.resolve(role) : Promise.reject();
  },
  // ...
};

export default authProvider;
