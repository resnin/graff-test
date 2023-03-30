import axios from "axios";


export const api_url = 'https://api.quotable.io'

const http = axios.create({
    headers: {},
    baseURL: api_url,
});

export default http