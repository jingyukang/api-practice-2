import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useReducer,
  useMemo,
} from "react";
import { BrowserRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import CreatePostForm from "./CreatePostForm";
import axios from "axios";
import EachContent from "./EachContent";
// import useFetch from "../../Hooks/useFetch";

export const PostsContext = createContext({
  posts: [],
  dispatch: () => {},
});
const initialState = {
  posts: [],
};
export const LOADING_DATA = "LOADING_DATA";
const reducer = (state, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        posts: action.posts,
      };
  }
};

const Blog = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { posts } = state;
  // const posts = useFetch("/api/posts");
  // const [posts, setPosts] = useState([]);
  const value = useMemo(() => ({ posts, dispatch }), [posts]);

  useEffect(() => {
    handleOnClick();
    // axios.get("/api/posts").then((res) => {
    //   setPosts(res.data);
    // });
  }, []);

  async function handleOnClick() {
    await axios.get("/api/posts").then((res) => {
      dispatch({ type: "LOADING_DATA", posts: res.data });
    });
  }

  return (
    <BrowserRouter>
      {/* <PostsContext.Provider value={{ posts: posts, dispatch }}> */}
      <PostsContext.Provider value={value}>
        <div className="App">
          <Link to="/blog/write">
            <button>Write</button>
          </Link>
          <Link to="/blog">
            <button onClick={handleOnClick}>List</button>
          </Link>
          <Switch>
            <Route exact path="/blog">
              {posts.map((p, i) => (
                <Link to={`/blog/${p._id}`}>
                  <h3>
                    {i + 1}. {p.title}
                  </h3>
                  {new Date(p.published_date).toDateString()}
                  <hr />
                </Link>
              ))}
            </Route>
            <Route exact path="/blog/write">
              <CreatePostForm />
            </Route>
            <Route path={`/blog/:id`}>
              <EachContent posts={posts} />
            </Route>
          </Switch>
        </div>
      </PostsContext.Provider>
    </BrowserRouter>
  );
};

export default Blog;
