import request from "./request";

const sampleServices = {
  async getSamplesByProjectId(id) {
    return await request.get("/samples/?project_id=" + id + "&status=true");
  },
  async update(id, lable) {
    return await request.put("/samples/lable/?id=" + id + "&lable=" + lable);
  },
};

export { sampleServices };
