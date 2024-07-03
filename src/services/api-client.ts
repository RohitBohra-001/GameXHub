import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "29799d79b93b4473bb3a0baee2f39b35",
  },
});
