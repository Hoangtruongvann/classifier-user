import request from "./request";

const commonServices = (resource) => {
  return {
    async get() {
      return await request.get(`/${resource}`);
    },
    async update(id, value) {
      return await request.put(`/${resource}/${id}`, value);
    },
    async create(value) {
      return await request.post(`/${resource}`, value);
    },
    async delete(id) {
      return await request.delete(`/${resource}/${id}`);
    },
  };
};

export default commonServices;