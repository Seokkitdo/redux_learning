import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Subscribers from "./Subscribers";
import { addSubscriber, removeSubscriber } from "../redux/index";

function SubscriberContainer() {
  const { count } = useSelector((state) => ({
    count: state.subscribe.count,
  }));

  const dispatch = useDispatch();

  const onSubscribe = () => dispatch(addSubscriber());

  return <Subscribers count={count} onSubscribe={onSubscribe} />;
}

export default SubscriberContainer;
