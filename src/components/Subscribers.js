import React from "react";

const Subscribers = ({ count, onSubscribe }) => {
  return (
    <div className="items">
      <p>구독자 수: {count}</p>
      <button onClick={onSubscribe}>구독하기</button>
    </div>
  );
};

export default Subscribers;
