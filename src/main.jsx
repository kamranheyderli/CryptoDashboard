import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import "./styles/main/main.scss";
import { Provider } from 'react-redux';
import store from "../src/redux/store/store.js";


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>

)
