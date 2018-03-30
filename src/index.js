import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

import Services from './components/Routes/Services/Services.js';
import About from './components/Routes/About/About.js';
import Contact from './components/Routes/Contact/Contact.js';
import Projects from './components/Routes/Projects/Projects.js';
import registerServiceWorker from './registerServiceWorker';
import EachProject from './components/Routes/EachProject/EachProject.js';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route  path="/products/:id" component={EachProject} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />

      <Route path="/" component={App} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
