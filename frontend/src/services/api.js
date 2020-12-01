import axios from "axios";

const DEFAULT_API_URL = "http://localhost:5000";

const instance = axios.create({
  baseURL: process.env.API_URL || DEFAULT_API_URL,
  timeout: 5000,
  headers: {'Content-Type': 'application/json'}
});

export default instance;