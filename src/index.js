import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './Styles.css';
import { Provider } from 'react-redux';
import store  from './store/store';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'; // Import createRoot from the correct location
import { BrowserRouter } from 'react-router-dom';
//import { PersistGate } from 'redux-persist/integration/react';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
   
    <BrowserRouter>
    <App />
    </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

reportWebVitals();




/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

*/
