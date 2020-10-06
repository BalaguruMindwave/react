import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//context Provider
import { LoginProvider } from "./context/auth/LoginContext";
import { RegisterProvider } from "./context/auth/RegisterContext";

//internal components
import Login from "../src/components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./components/dahboard";
import NotFound from "./components/notfound";

function App() {
    return (
        <Router>
            <LoginProvider>
                <Route exact path="/" component={Login} />
            </LoginProvider>
            <RegisterProvider>
                <Route exact path="/register" component={Register} />
            </RegisterProvider>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="*" component={NotFound} />
        </Router>
    );
}

export default App;
