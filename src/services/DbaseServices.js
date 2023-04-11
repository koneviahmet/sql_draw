import http from "./http";

const DbaseServices = {
  getItems: async () => {
    try {
      const response = await http.get("/dbase");
      return response?.data;
    } catch (e) {}
  },
  searchItems: async (obj) => {
    try {
      const response = await http.get("/dbase");
      return response?.data;
    } catch (e) {}
  },
  getItem: async (obj) => {
    try {
      const response = await http.get(`/dbase/${obj.id}`);
      return response?.data;
    } catch (e) {}
  },
  addItem: async (obj) => {
    try {
      const response = await http.post("/dbase", obj);
      return response?.data;
    } catch (e) {}
  },
  updateItem: async (obj) => {
    try {
      const response = await http.put(`/dbase/${obj.id}`, obj);
      return response?.data;
    } catch (e) {}
  },
  deleteItem: async (obj) => {
    try {
      const response = await http.delete(`/dbase/${obj.id}`);
      return response?.data;
    } catch (e) {}
  },
};

export default DbaseServices;
