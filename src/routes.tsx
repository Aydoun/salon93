import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sessions from "./pages/Sessions";
import Income from "./pages/Income";
import Presence from "./pages/Presence";
import Tax from "./pages/Tax";

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/sessions" component={Sessions} exact />
    <Route path="/income" component={Income} exact />
    <Route path="/presence" component={Presence} exact />
    <Route path="/tax" component={Tax} exact />
  </Switch>
);

export default Routes;
