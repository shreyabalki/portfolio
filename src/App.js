import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
<<<<<<< HEAD
=======
import ResumeViewer from "./pages/ResumeViewer";
import CaseStudy from "./pages/CaseStudy";
>>>>>>> origin/main

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
<<<<<<< HEAD
=======
        <Route exact path="/resume" component={ResumeViewer} />
        <Route path="/projects/:slug" component={CaseStudy} />
>>>>>>> origin/main
      </Switch>
    </Router>
  );
}

export default App;
