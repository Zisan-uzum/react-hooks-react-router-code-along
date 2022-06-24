import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
export default function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    );
}
