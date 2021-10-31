import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
const name ="Willy DONGMO";
ReactDOM.render(
  <React.StrictMode>
    <Header name ={name} menuEntries={["Home", "Services", "Projects", "About", "Contact"]}  />
    <Hero name={name} />
  </React.StrictMode>,
  document.getElementById('root')
);

 