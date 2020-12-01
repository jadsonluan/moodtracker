import instance from "./api";

export default {
  findAll: () => instance.get("/moods"),
  create: (mood) => instance.post("/moods", mood)
}