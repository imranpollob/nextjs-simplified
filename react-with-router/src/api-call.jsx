import axios from "axios";

export const baseApi = axios.create({ baseURL: import.meta.env.VITE_API_URL });

if (import.meta.env.VITE_SLOW_API === "true") {
  baseApi.interceptors.response.use((res) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  });
}

export function getUsers(options) {
  return baseApi.get("users", options).then((res) => res.data);
}

export function getUser(userId, options) {
  return baseApi.get(`users/${userId}`, options).then((res) => res.data);
}

export function getPosts(options) {
  return baseApi.get("posts", options).then((res) => res.data);
}

export function getPost(postId, options) {
  return baseApi.get(`posts/${postId}`, options).then((res) => res.data);
}

export function getComments(postId, options) {
  return baseApi
    .get(`posts/${postId}/comments`, options)
    .then((res) => res.data);
}

export function getTodos(options) {
  return baseApi.get("todos", options).then((res) => res.data);
}
