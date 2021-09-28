import Main from "./pages/main";
import Login from "./pages/login";
import { isLogin } from "./utils/helpers";

const App = () => {
  return isLogin() ? <Main /> : <Login />;
};

export default App;
