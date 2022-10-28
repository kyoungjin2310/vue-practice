import axios from "axios";

//공통
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

function fetchList(pageName) {
  try {
    const response = axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//router params id값을 인자로 받아서 api요청
function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

//api item
function fetchCommentItem(username) {
  return axios.get(`${config.baseUrl}item/${username}.json`);
}

export { fetchUserInfo, fetchCommentItem, fetchList };
