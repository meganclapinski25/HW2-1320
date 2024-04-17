import React from 'react';
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css';
import Home from './components/Home';
import App from './components/App';
import POPOSList from './components/POPOSList';
import About from './components/About';
import reportWebVitals from './components/reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import POPOSDetails from './components/POPOSDetails'
import NewsLetter from './components/Newsletter';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<POPOSList />} />
        <Route path="newsletter" element={<NewsLetter />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
      </Route>
    </Routes>
  </Router>
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();