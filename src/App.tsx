import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import { isLogin } from "./utils/helpers";

const App = () => (
  <Router>
    {isLogin() ? (
      <Route path="/">
        <Main />
      </Route>
    ) : (
      <Route path="/login">
        <Login />
      </Route>
    )}
  </Router>
);

export default App;
