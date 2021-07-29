import StatsPreview from "./Challenge1/components/StatsPreview";
import Menu from "./components/Menu";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/stats_preview">
            <StatsPreview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
