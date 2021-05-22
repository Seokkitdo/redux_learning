import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchComments } from "../redux/index";

const Comments = ({ comments, loading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const commentsItems = loading ? (
    <div>is loading...</div>
  ) : (
    comments.map((comment) => (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    ))
  );

  return <div className="comments">{commentsItems}</div>;
};

export default Comments;
