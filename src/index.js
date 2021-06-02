import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import './index.css';
import App from './App';
import NotFound from './component/NotFound';
import reportWebVitals from './reportWebVitals';
import Dashboard3 from './component/Dashboard3';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <div className="App">
          <Switch>
          <Route path="/" exact component={ App } />
          <Route path="/dashboard3" exact component={Dashboard3} />
          <Route path="/*" exact component={ NotFound } /> 
          </Switch>
        </div>
      </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);
reportWebVitals();
