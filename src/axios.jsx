import axios from "axios";

const instance = axios.create({
  //  remeber : after baseURL

  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
