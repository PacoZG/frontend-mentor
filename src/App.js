import StatsPreview from "./StatsPreview/StatsPreview";
import Menu from "./components/Menu";
import Home from "./components/Home";
import ProfileCard from "./ProfileCard/ProfileCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <div role="main" className="">
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
          <Route path="/profile_card">
            <ProfileCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
