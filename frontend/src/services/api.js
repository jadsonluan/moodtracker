const BASE_URL = "http://localhost:5000"

export default {
  tags: {
    findAll: () => fetch(BASE_URL.concat("/tags"), { method: 'GET' })
  }
}