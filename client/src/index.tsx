import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollToTop from './ScroleTop';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
