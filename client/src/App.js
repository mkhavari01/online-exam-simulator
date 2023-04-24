import "./App.css";
import { PostsList, NotFound } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PostsList} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
