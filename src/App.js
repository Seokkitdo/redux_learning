import "./App.css";
import CommentsContainer from "./components/CommentsContainer";
import DisplayContainer from "./components/displayContainer";
import SubscriberContainer from "./components/subscriberContainer";

function App() {
  return (
    <div className="App">
      <CommentsContainer />
      <SubscriberContainer />
      <DisplayContainer />
    </div>
  );
}

export default App;
