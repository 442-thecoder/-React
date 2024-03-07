import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Parent from './Parent.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode id="movies" >
    <div id="mainpic">
    <h1 id="pspk">KONIDELA KALYAN BABU</h1>
    <img id='h1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Pawan2.jpg/330px-Pawan2.jpg" alt="" />
    <h2> POWER STAR PAWAN KALYAN</h2></div>
      <hr/>
    <Parent />
    <hr/>
  </React.StrictMode>
);

