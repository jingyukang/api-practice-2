import axios from "axios";
import React, { memo, useState, useContext } from "react";
import { useParams, useHistory } from "react-router";
import { PostsContext } from "..";
import { TextField, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { fetchPosts, updatePost } from "../../../api/posts";

const UpdatePost = memo(() => {
  const { posts, dispatch } = useContext(PostsContext);
  const contentId = useParams();
  const originPost = posts.find((post) =>
    post._id === contentId.id ? post : null
  );

  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const history = useHistory();

  async function onSubmit(e) {
    e.preventDefault();
    const post = {
      title: postTitle,
      content: postContent,
    };
    await updatePost(post, contentId.id);
    // await axios.put(`/api/posts/${contentId.id}`, {
    //   title: titleRef.current.value,
    //   content: contentRef.current.value,
    // });
    await dispatch({ type: "LOADING_DATA", posts: await fetchPosts() });
    history.push(`/blog/`);
  }

  // async function onSubmit(e) {
  //   e.preventDefault();
  //   await axios.put(`/api/posts/${contentId.id}`, {
  //     title: titleRef.current.value,
  //     content: contentRef.current.value,
  //   });
  //   dispatch({ type: "LOADING_DATA", posts: await fetchPosts() });

  //   history.push(`/blog/`);
  // }

  return (
    <Box sx={{ width: "100%" }}>
      <form onSubmit={onSubmit}>
        <Box>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            defaultValue={originPost.title}
            margin="normal"
            onChange={(e) => setPostTitle(e.target.value)}
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
            defaultValue={originPost.content}
            margin="normal"
            onChange={(e) => setPostContent(e.target.value)}
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
});
export default UpdatePost;
