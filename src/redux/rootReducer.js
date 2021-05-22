import { combineReducers } from "redux";
import subscribersReducer from "../redux/subscribers/reducer";
import viewsReducer from "../redux/views/reducer";
import commentsReducer from "../redux/comments/reducer";
const rootReducer = combineReducers({
  subscribe: subscribersReducer,
  view: viewsReducer,
  comments: commentsReducer,
});

export default rootReducer;
