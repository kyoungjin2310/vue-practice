import axios from "axios";

//공통
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

//api 함수
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

export { fetchNewsList };
