import axios from "axios";

// Defines the path to the backend server from which resources are fetched
export default axios.create({
  baseURL: "//localhost:8081",
  headers: {
    "Content-type": "application/json"
  }
});