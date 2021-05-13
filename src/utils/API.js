import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=100";
function employee() {
  return axios.get(BASEURL);
}

export default employee;
