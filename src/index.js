import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route } from "react-router-dom";
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
