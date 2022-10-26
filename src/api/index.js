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

//router params id값을 인자로 받아서 api요청
function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo };
