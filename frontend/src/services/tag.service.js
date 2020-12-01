import instance from "./api";

export default {
  findAll: () => instance.get("/tags"),
  create: (tag) => instance.post("/tags", tag)
};
