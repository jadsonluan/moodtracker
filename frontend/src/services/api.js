import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 5000,
  headers: {'Content-Type': 'application/json'}
});

export default {
  tags: {
    findAll: () => instance.get("/tags"),
    create: (tag) => instance.post("/tags", tag)
  },
  moods: {
    findAll: () => instance.get("/moods"),
    create: (mood) => instance.post("/moods", mood)
  }
}