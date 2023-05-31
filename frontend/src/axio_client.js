import axios from "axios";
const axiosClient=axios.create({
  baseURL:'http://localhost/projects/php_react/App/api/',
}
)
export default axiosClient;