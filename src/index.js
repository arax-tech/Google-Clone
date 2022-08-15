import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StateProvider } from "./contextApi/StateProvider";
import  reducer, { initialState } from "./contextApi/reducer.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </BrowserRouter>
);
