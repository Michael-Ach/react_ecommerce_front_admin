import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGVjYmQ2NGRiY2Q4YzA5YmMwNmE4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTMzMTY0MSwiZXhwIjoxNjQ5NTkwODQxfQ.vW_gRlnwPzSpDxFM2LKwQoceA6fMDucYYFPyyJC-f-g";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
