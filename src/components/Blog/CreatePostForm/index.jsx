import axios from "axios";
import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router";
import { PostsContext } from "..";

const CreatePostForm = React.memo(() => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const history = useHistory();
  const { posts, dispatch } = useContext(PostsContext);

  function onSubmit(e) {
    e.preventDefault();

    axios.post("/api/posts", {
      title: titleRef.current.value,
      content: contentRef.current.value,
    });
    axios.get("/api/posts").then((res) => {
      dispatch({ type: "LOADING_DATA", posts: res.data });
    });

    history.push(`/blog/`);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Title" ref={titleRef} />
        <textarea cols="30" rows="10" ref={contentRef} placeholder="Content" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
});

export default CreatePostForm;
