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

const buildFormData = (formData, data, parentKey) => {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? undefined : data;
    formData.append(parentKey, value);
  }
};

const checkIfimageIsDeleted = (imageParams) => {
  if(!imageParams){return}
  if(imageParams.header === null){imageParams.header = {src:""}};
  if(imageParams.favicon === null){imageParams.favicon = {src:""}};
  if(imageParams.background === null){imageParams.background = {src:""}};
  if(imageParams.og.twitter === null){imageParams.og.twitter = {src:""}};
  if(imageParams.og.facebook === null){imageParams.og.facebook = {src:""}};
};

const dataProvider = {
  getList: async (resource, params) => {
    console.log("get List", resource, params);
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const asc = order === "ASC" ? "-" + field : field;
    const query = {
      sortBy: field === "id" ? undefined : asc,
      perPage: perPage,
      page: page,
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}&${stringify(
      params.filter
    )}`;
    const { json } = await httpClient(url);
    return {
      data: json.data,
      total: json.total,
    };
  },

  getOne: async (resource, params) => {
    try {
      console.log("get one", resource, params);
      const url = `${apiUrl}/${resource}/${params.id}`;
      const { json } = await httpClient(url);
      return { data: json };
    } catch (e) {
      throw new Error("Network error");
    }
  },

  getMany: async (resource, params) => {
    console.log("get Many", resource, params);
    const url = `${apiUrl}/${resource}?${stringify({ _id: params.ids })}`;
    const { json } = await httpClient(url);
    console.log(json);
    return { data: json.data };
  },

  getManyReference: async (resource, params) => {
    console.log("get Many reference", resource, params);
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
    console.log(url);
    const { json } = await httpClient(url);
    console.log(json);
    return {
      data: json.list,
      total: json.total,
    };
  },

  update: async (resource, params) => {
    try {
      const url = `${apiUrl}/${resource}/${params.id}`;
      checkIfimageIsDeleted(params.data.images);
      const containsImage =
        params.data.images && (
        params.data.images.header.rawFile ||
        params.data.images.favicon.rawFile ||
        params.data.images.background.rawFile||
        params.data.images.og.twitter.rawFile ||
        params.data.images.og.facebook.rawFile);
      if (
        resource !== "manifestations" ||
        !containsImage ||
        params.data.users_id
      ) {
        const { json } = await httpClient(url, {
          method: "PUT",
          body: JSON.stringify(params.data),
        });
        return { data: json };
      }
      function jsonToFormData(data) {
        var formData = new FormData();
        buildFormData(formData, params.data);
        return formData;
      }
      const { json } = await httpClient(url, {
        method: "PUT",
        body: jsonToFormData(params.data),
      });
      return { data: json };
    } catch (e) {
      throw new Error(e.message);
    }
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

  create: async (resource, params) => {
    console.log("Create", resource);
    const { json } = await httpClient(`${apiUrl}/${resource}?${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  delete: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: "DELETE",
    });
    return { data: json };
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
