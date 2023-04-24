import "./App.css";
import { PrivateRoute } from "./HOC/PrivateRoute";
import {
  PostsList,
  NotFound,
  LoginPage,
  SignupPage,
  FormPage,
  HomePage,
} from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <PrivateRoute exact path="/form" component={FormPage} />
        <Route exact path="/test" component={PostsList} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
