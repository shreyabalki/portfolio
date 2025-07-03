import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";

// Resume Viewer Component
const ResumeViewer = () => (
  <iframe
    src="/Srimonchaari_Padmanabhan_Babu_Resume.pdf"
    title="Srimonchaari Resume"
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
