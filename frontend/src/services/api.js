import axios from "axios";
// import dotenv from "dotenv";

const DEFAULT_API_URL = "http://localhost:5000";

const instance = axios.create({
  baseURL: process.env.API_URL || DEFAULT_API_URL,
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