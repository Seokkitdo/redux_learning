import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Display from "./Display";
import { addView } from "../redux";

function DisplayContainer() {
  const { count } = useSelector((state) => ({
    count: state.view.count,
  }));

  const dispatch = useDispatch();

  const onView = (number) => dispatch(addView(number));
  return <Display count={count} onView={onView} />;
}

export default DisplayContainer;
