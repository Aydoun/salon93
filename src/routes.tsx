import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Sessions from "./pages/sessions";

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/sessions" component={Sessions} exact />
  </Switch>
);

export default Routes;
