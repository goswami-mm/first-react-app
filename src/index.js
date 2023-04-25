import ReactDOM from "react-dom/client";
import { App } from "./App";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Notes } from "./pages/Notes";
import { Dashboard } from "./pages/Dashboard";

const rootDiv = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(rootDiv);

reactRoot.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notes" element={<Notes />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
