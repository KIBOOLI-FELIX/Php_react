import axios from "axios";
const axiosClient=axios.create({
  baseURL:'http://localhost/testprojects/phpreact/App/api/',
}
)
export default axiosClient;