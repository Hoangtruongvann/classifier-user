import request from "./request";

const sampleServices = () => {
  return {
    get: (value) => request.get(`/samples/?project_id=${value}&status=true`)
    ,
    async update(id, lable ) {
      return await request.put(`/samples/lable?id=${id}&lable=${lable}`);
    },
    async create(value) {
      return await request.post(`/samples/sample`, value);
    },
    async delete(id) {
      return await request.delete(`/samples/?${id}`);
    },
  };
};

export default sampleServices;