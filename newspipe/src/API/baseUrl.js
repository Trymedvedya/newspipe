import axios from "axios";

const baseURL = axios.create({baseURL: 'https://newspaper-1eeec-default-rtdb.europe-west1.firebasedatabase.app'});
export default baseURL;