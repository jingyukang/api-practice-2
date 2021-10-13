import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useReducer,
} from "react";
import { BrowserRouter, Switch, Link, Route, Redirect } from "react-router-dom";
// import { useHistory } from "react-router";
import CreatePostForm from "./CreatePostForm";
import axios from "axios";
import EachContent from "./EachContent";
import useFetch from "../../Hooks/useFetch";

const Blog = React.memo(() => {
  // const [posts, setPosts] = useState([]);
  const posts = useFetch("/api/posts");

  // const title = useRef(null);
  // const someContent = useRef(null);
  // const callData = () => {
  // axios.get("/api/posts").then((res) => {
  //   setPosts(res.data);
  // });
  // };

  // useEffect(() => {
  //   callData();
  // }, []);

  // console.log(posts);
  // const history = useHistory();

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/blog/write">
          <button>Write</button>
        </Link>
        <Link to="/blog">
          <button>List</button>
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
          <Route path={`/blog/:blog`}>
            <EachContent />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
});

export default Blog;
