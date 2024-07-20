import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import "./style/flexboxgrid.min.css";
// import './style/index.css';
// import { configureStore } from "@reduxjs/toolkit";
// import globalReducer from "state";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { combineReducers } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import store from "store";

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const rootReducer = combineReducers({
//   global: globalReducer,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefault) => getDefault({ serializableCheck: false, })
// });

// const persistor = persistStore(store)

// setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);
