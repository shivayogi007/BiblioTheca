import React from 'react';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Routes from './Routes'

function App() {
  return (
    <>
      <Router history={createBrowserHistory()}>
        <Routes />
      </Router>
    </>
  );
}

export default App;
