import axios from "axios";
// import { IPost } from "../models/IPosts";

export const fetchPosts = () => {
  return new Promise((resolve, reject) =>
    axios
      .get("/api/posts")
      .then((res) => res.data)
      .then((posts) => resolve(posts))
      .catch((error) => reject(error))
  );
};

export const createPposts = (post) => {
  return new Promise((resolve, reject) =>
    axios
      .post("/api/posts", post)
      .then((res) => res.data)
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  );
};

export const updatePost = (post, id) => {
  return new Promise((resolve, reject) =>
    axios
      .put(`/api/posts/${id}`, post)
      .then((res) => res.data)
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  );
};

export const deletePost = (id) => {
  return new Promise((resolve, reject) =>
    axios
      .delete(`/api/posts/${id}`)
      .then((res) => res.data)
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  );
};
