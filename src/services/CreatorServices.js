import http from "./http";

const CreatorServices = {
  getItems: async () => {
    try {
      const response = await http.get("/creator");
      return response?.data;
    } catch (e) {}
  },
  searchItems: async (obj) => {
    try {
      const response = await http.get("/creator");
      return response?.data;
    } catch (e) {}
  },
  getItem: async (obj) => {
    try {
      const response = await http.get(`/creator/${obj.id}`);
      return response?.data;
    } catch (e) {}
  },
  addItem: async (obj) => {
    try {
      const response = await http.post("/creator", obj);
      return response?.data;
    } catch (e) {}
  },
  updateItem: async (obj) => {
    try {
      const response = await http.put(`/creator/${obj.id}`, obj);
      return response?.data;
    } catch (e) {}
  },
  deleteItem: async (obj) => {
    try {
      const response = await http.delete(`/creator/${obj.id}`);
      return response?.data;
    } catch (e) {}
  },
};

export default CreatorServices;
