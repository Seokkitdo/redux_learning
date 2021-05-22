import React, { useState } from "react";

const Display = ({ count, onView }) => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <p>조회 수 : {count}</p>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => onView(number)}>조회수 추가</button>
    </div>
  );
};

export default Display;
