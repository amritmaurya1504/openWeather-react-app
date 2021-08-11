import React, { useState } from "react";
import "./App.css";
import DataContainer from "./components/DataContainer";
import Nav from "./components/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function App() {

    return (
        <>

            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/"><DataContainer /></Route>
                    {/* <Route exact path="/moreinfo"><moreWeathInfo /></Route> */}
                </Switch>
            </Router>
        </>
    );
}