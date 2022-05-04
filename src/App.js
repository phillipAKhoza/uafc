import React from 'react';
// import {createBrowserHistory} from 'history';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Home from './components/body/Home';
import 'bootstrap/dist/css/bootstrap.css';
// const appHistory = {
//   basename: process.env.PUBLIC_URL
// };
// const history = createBrowserHistory(appHistory);

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
