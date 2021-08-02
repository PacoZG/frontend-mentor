import Menu from "./components/Menu";
import Home from "./components/Home";
import StatsPreview from "./StatsPreview/StatsPreview";
import ProfileCard from "./ProfileCard/ProfileCard";
import TCP from "./3ColumnPreview/3ColumnPreview";
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
          <Route Path="/3_column_preview">
            <TCP />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
