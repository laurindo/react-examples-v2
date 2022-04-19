import React from "react";
import {createBrowserHistory} from "history";
import BrowserRouter from "./Router";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}/>
  );
}

export default App;
