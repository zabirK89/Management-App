import React from "react";
import ReactDOM from "react-dom";
import store from "./Redux/Store"
import store, { persistor } from './Redux/Store';
 import {Provider} from "react-redux"
import App from "./App";
import { PersistGate } from 'redux-persist/es/integration/react';
ReactDOM.render(
<Provider store={store}>
<PersistGate persistor={persistor}>
     
<App />
</PersistGate>
</Provider>
,
     document.getElementById("root"));
