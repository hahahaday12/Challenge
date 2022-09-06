import axios from "axios";

const instance = axios.create({
    baseURL: "https://api/themoviedb.org/3",
    params:{
        api_key: "aa899e2b19534d90209b2131b8b704bc",
        languag: "ko-KR",
    }
});

export default instance;