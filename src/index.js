import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=6158997032204f0abd89567fce056c9c')
.then(resapi=>{return resapi.json();})
.then(res=>{
  console.log(res);
})
