import http from "./http";

const TableServices = {
  getItems: async () => {
    try {
      const response = await http.get("/table");
      return response?.data;
    } catch (e) {}
  },
  searchItems: async (obj) => {
    try {
      const response = await http.get("/table");
      return response?.data;
    } catch (e) {}
  },
  getItem: async (obj) => {
    try {
      const response = await http.get(`/table/${obj.id}`);
      return response?.data;
    } catch (e) {}
  },
  addItem: async (obj) => {
    try {
      const response = await http.post("/table", obj);
      return response?.data;
    } catch (e) {}
  },
  updateItem: async (obj) => {
    try {
      const response = await http.put(`/table/${obj.id}`, obj);
      return response?.data;
    } catch (e) {}
  },
  deleteItem: async (obj) => {
    try {
      const response = await http.delete(`/table/${obj.id}`);
      return response?.data;
    } catch (e) {}
  },
};

export default TableServices;
