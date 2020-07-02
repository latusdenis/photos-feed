import axios from "axios";

const DEV_URL = "https://jsonplaceholder.typicode.com";

axios.defaults.baseURL = DEV_URL;

export { axios };
