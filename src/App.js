import React, { useState } from "react";
import "./App.css";
import DataContainer from "./components/DataContainer";
import Nav from "./components/Nav";
export default function App() {

    return (
        <>
           <Nav />
           <DataContainer />
        </>
    );
}