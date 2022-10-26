import axios from "axios";

//공통
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

//api News
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}
//api ask
function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}
//api jobs
function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList };

