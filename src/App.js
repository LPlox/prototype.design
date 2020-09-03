import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Nav from "./components/Nav";
import Home from "./pages/Home";
const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));
const Layout = lazy(() => import("./pages/Layout"));
const Font = lazy(() => import("./pages/Font"));
const Color = lazy(() => import("./pages/Color"));
const Render = lazy(() => import("./pages/Render"));

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/prototype/layout">
              <Layout />
            </Route>
            <Route path="/prototype/font">
              <Font />
            </Route>
            <Route path="/prototype/color">
              <Color />
            </Route>
            <Route path="/prototype/render">
              <Render />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
