import { createContext, useState } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";


export const UserContext = createContext();

export default function App() {
  const [isLogged, setLogged] = useState(false);
  const setAuth = () => {
    setLogged((prevLoogged) => !prevLogged);
  }
  const value = {isLogged: isLogged, setAuth: setAuth}

  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <nav>
          <Link to="/">Home |</Link>
          <Link to="/login">Login |</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

