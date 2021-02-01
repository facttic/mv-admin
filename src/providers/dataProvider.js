import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = "http://localhost:3333/api";

const httpClient = async (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const { token } = JSON.parse(localStorage.getItem("auth"));
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const asc = order === "ASC" ? "-" + field : field;
    const query = {
      sort: "field " + asc,
      skip: JSON.stringify((page - 1) * perPage),
      limit: JSON.stringify(page * perPage),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return {
      data: json.data,
      total: json.total,
    };
  },

  getOne: async (resource, params) => {
    try{
        const url = `${apiUrl}/${resource}/${params.id}`;
        console.log("getOne", url);
        const {json} = await httpClient(url);
        return {data: json};
    } catch (e) {
        throw new Error('Network error');
    }
  },

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return { data: json };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { headers, json } = await httpClient(url);
    return {
      data: json,
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    };
  },

  update: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    console.log("Update at", url);
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    })
    return  {data: json} ; 
  },

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const { json } = await httpClient(
      `${apiUrl}/${resource}?${stringify(query)}`,
      {
        method: "PUT",
        body: JSON.stringify(params.data),
      }
    );
    return { data: json };
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    })),

  delete: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    httpClient(url, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },

  deleteMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const { json } = await httpClient(
      `${apiUrl}/${resource}?${stringify(query)}`,
      {
        method: "DELETE",
        body: JSON.stringify(params.data),
      }
    );
    return { data: json };
  },
};

export default dataProvider;
