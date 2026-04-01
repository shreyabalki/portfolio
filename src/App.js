import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import ResumeViewer from "./pages/ResumeViewer";
import CaseStudy from "./pages/CaseStudy";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/resume" component={ResumeViewer} />
        <Route path="/projects/:slug" component={CaseStudy} />
      </Switch>
    </Router>
  );
}

export default App;
