import axios from "axios";

export interface FetchResponse<T> {
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data);
  }

}

export default APIClient;
