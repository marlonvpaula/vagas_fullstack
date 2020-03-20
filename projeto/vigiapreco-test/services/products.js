import axios from "axios";
const instance = axios.create({ baseURL:  'http://localhost:8081' });

export default {
  async get() {
    try {
      let response = await instance.get("/products");
      console.log(response);
      
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
