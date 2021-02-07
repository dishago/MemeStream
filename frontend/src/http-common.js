import axios from "axios";

export default axios.create({
  baseURL: "//disha-xmeme.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});