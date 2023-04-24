import "./App.css";
import {
  PostsList,
  NotFound,
  LoginPage,
  SignupPage,
  ProgressForm,
} from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PostsList} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/form" component={ProgressForm} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
