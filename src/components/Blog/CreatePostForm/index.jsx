import axios from "axios";
import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router";
import { PostsContext } from "..";
import { TextField, Button } from "@mui/material";

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
      {/* <form onSubmit={onSubmit}>
        <input type="text" placeholder="Title" ref={titleRef} />
        <textarea cols="30" rows="10" ref={contentRef} placeholder="Content" />
        <button type="submit">Submit</button>
      </form> */}
      <form onSubmit={onSubmit}>
        <div>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            margin="normal"
            sx={{ width: "50%" }}
            inputRef={titleRef}
          />
        </div>
        <div>
          <TextField
            id="filled-multiline-static"
            label="Contents"
            multiline
            rows={4}
            variant="filled"
            margin="normal"
            sx={{ width: "50%" }}
            inputRef={contentRef}
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            size="small"
            margin="normal"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
});

export default CreatePostForm;
