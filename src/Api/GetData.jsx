/* eslint-disable no-unused-vars */
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
});

// post request of registration

export const getRegistrationDetails = async (input) => {
  try {
    const response = await api.post("/api-auth/registration", input);
    return response;
  } catch (error) {
    return error.response || "Bad response";
  }
};

//login details post data

export const getLoginDetails = async (input) => {
  try {
    const response = await api.post("/api-auth/login", input);
    return response;
  } catch (error) {
    return error.response || "Bad response";
  }
};

//contact details post data

export const getContactDetails = async (input) => {
  try {
    const response = await api.post("/api/form/contacts", input);
    return response;
  } catch (error) {
    return error.response || "Bad response";
  }
};

// User Data by JWT token

export const getUserDetails = async (token) => {
  try {
    const response = await api.get("/api-auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response || "Bad response";
  }
};

// get data of service section

export const getServiceData = async () => {
  try {
    const response = api.get("/api/services");
    return response;
  } catch (error) {
    return response.error;
  }
};

// Admin user Data
export const getAdminUser = async (input) => {
  try {
    const response = await api.get("/api/admin", {
      headers: {
        Authorization: ` Bearer ${input}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

//Admin contact data

export const getadminContact = async (input) => {
  try {
    const response = await api.get("/api/contactData", {
      headers: {
        Authorization: ` Bearer ${input}`,
      },
    });
    return response;
  } catch (error) {
    return response.error;
  }
};

// Delete User

export const deleteUser = async (id, token) => {
  try {
    const response = await api.delete(`/api/admin/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// get data by id

export const getDataById = async (id, token) => {
  try {
    const response = await api.get(`/api/admin/data/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// update data by id
export const userUpdate = async (id, token, data) => {
  try {
    const response = await api.patch(`/api/admin/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// delete contact data by id
export const deleteContactDataById = async (id, token) => {
  try {
    const response = await api.delete(`/api//admin/contact/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
