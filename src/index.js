import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
ReactDOM.render(
  <React.StrictMode>
    <Header name ="Willy DONGMO" menuEntries={["Home", "Services", "Projects", "About", "Contact"]}  />
  </React.StrictMode>,
  document.getElementById('root')
);

 