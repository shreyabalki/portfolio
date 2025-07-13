import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";

// Resume Viewer Component
const ResumeViewer = () => (
  <iframe
    src="/SHREYA CHAGANDI BALAKRISHNAN Resume_.pdf"
    title="Shreya Resume"
    width="100%"
    height="100vh"
    style={{border: "none"}}
  />
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/resume" element={<ResumeViewer />} />
      </Switch>
    </Router>
  );
}

export default App;
