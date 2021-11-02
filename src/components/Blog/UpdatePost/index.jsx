import axios from "axios";
import React, { useState, useRef, useContext } from "react";
import { useParams, useHistory } from "react-router";
import { PostsContext } from "..";
import { TextField, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const UpdatePost = () => {
  const { posts, dispatch } = useContext(PostsContext);
  const contentId = useParams();
  const post = posts.find((post) => (post._id === contentId.id ? post : null));
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const history = useHistory();

  function onSubmit(e) {
    axios.put(`/api/posts/${contentId.id}`, {
      title: titleRef.current.value,
      content: contentRef.current.value,
    });
    axios.get("/api/posts").then((res) => {
      dispatch({ type: "LOADING_DATA", posts: res.data });
    });

    history.push(`/blog/`);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <form onSubmit={onSubmit}>
        <Box>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            defaultValue={post.title}
            margin="normal"
            inputRef={titleRef}
            sx={{ width: "50%" }}
          />
        </Box>
        <Box>
          <TextField
            id="filled-multiline-static"
            label="Contents"
            multiline
            rows={10}
            variant="filled"
            defaultValue={post.content}
            margin="normal"
            inputRef={contentRef}
            sx={{ width: "50%" }}
          />
        </Box>
        <Box>
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            size="small"
            margin="normal"
          >
            Update
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default UpdatePost;
