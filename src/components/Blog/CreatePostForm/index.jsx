import axios from "axios";
import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router";
import { PostsContext } from "..";
import { TextField, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
    <Box sx={{ width: "100%" }}>
      {/* <form onSubmit={onSubmit}>
        <input type="text" placeholder="Title" ref={titleRef} />
        <textarea cols="30" rows="10" ref={contentRef} placeholder="Content" />
        <button type="submit">Submit</button>
      </form> */}
      <form onSubmit={onSubmit}>
        <Box>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
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
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
});

export default CreatePostForm;
