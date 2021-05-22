import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./types";

const iniitalState = {
  count: 365,
};
const subscribersReducer = (state = iniitalState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        count: state.count + 1,
      };

    case REMOVE_SUBSCRIBER:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default subscribersReducer;
