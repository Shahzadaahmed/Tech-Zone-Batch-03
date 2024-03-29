import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";

// MDB Bootstarp Integration...!
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <App />
);