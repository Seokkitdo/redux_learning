import React from "react";
import { useSelector } from "react-redux";
import Comments from "./Comments";

function CommentsContainer() {
  const { comments, loading } = useSelector((state) => ({
    comments: state.comments.items,
    loading: state.comments.loading,
  }));

  return <Comments loading={loading} comments={comments} />;
}

export default CommentsContainer;
