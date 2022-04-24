import axios from "axios";
export default axios.create({
  baseURL: "https://gist.githubusercontent.com/creathusjobs/",
  headers: {
    "Content-type": "application/json"
  }
});