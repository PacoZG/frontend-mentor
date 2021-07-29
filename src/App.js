import StatsPreview from "./Challenge1/components/StatsPreview";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Router>
        <Menu />
        <Switch>
          <Route path="/stats_preview">
            <StatsPreview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
