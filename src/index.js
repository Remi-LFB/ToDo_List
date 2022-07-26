import React from "react";
import {createRoot} from "react-dom/client";

import App from "./components/App";

const container = document.body;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);