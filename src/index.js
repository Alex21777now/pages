import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Switch,
  Router,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import Home from "./routes/home";
import About from "./routes/about";
import Users from "./routes/users";
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
   <App />
   /*<BrowserRouter>

       <Route path="/" element={<App />} />
       <Route path="home" element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="users" element={<Users />} />

    </BrowserRouter>*/
  </React.StrictMode>,
  rootElement
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
