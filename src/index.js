// import React from 'react';

// import './index.css';
// import App from './App';


// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<React.StrictMode>
//   <App />
// </React.StrictMode>);

import React from 'react';
import ReactDOM from "react-dom/client";

import './index.css';
import App from './App';

    ReactDOM.createRoot(document.querySelector("#root")).render(<React.StrictMode><App /></React.StrictMode>);