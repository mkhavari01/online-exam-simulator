import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosts,
  selectAllPosts,
  selectPostStatus,
  selectError,
} from "../redux/postsSlice";
import CircularProgress from "@mui/material/CircularProgress";

function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(selectPostStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (postStatus === "loading") {
    return (
      <h1 className="loader">
        <CircularProgress />
      </h1>
    );
  }

  if (postStatus === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export { PostsList };
