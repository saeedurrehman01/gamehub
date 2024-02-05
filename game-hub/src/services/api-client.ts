import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b0aab6b5cb6d487090bdc25d5b45c497",
  },
});
