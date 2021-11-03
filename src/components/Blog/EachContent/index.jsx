import React, { useContext } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { PostsContext } from "..";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { fetchPosts, deletePost } from "../../../api/posts";

const EachContent = () => {
  const history = useHistory();
  const contentId = useParams();
  const { posts, dispatch } = useContext(PostsContext);

  async function del(e) {
    e.preventDefault();
    await deletePost(contentId.id);
    // axios.delete(`/api/posts/${contentId.id}`);
    dispatch({ type: "LOADING_DATA", posts: await fetchPosts() });

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
      <div>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          size="small"
          onClick={del}
        >
          Delete
        </Button>
        <Link
          to={`/blog/update/${contentId.id}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddCircleIcon />}
            size="small"
          >
            Update
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EachContent;
