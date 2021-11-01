import React, { useContext } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import { PostsContext } from "..";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const EachContent = () => {
  const history = useHistory();
  const contentId = useParams();
  const { posts, dispatch } = useContext(PostsContext);

  function del() {
    axios.delete(`/api/posts/${contentId.id}`);
    axios.get("/api/posts").then((res) => {
      dispatch({ type: "LOADING_DATA", posts: res.data });
    });
    history.push("/blog");
  }

  return (
    <div>
      {posts.map((post) => {
        if (post._id === contentId.id) {
          return (
            <div>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          );
        }
      })}
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        size="small"
        onClick={del}
      >
        Delete
      </Button>
    </div>
  );
};

export default EachContent;
