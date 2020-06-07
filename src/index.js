import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import './index.css';
import App from './App';
import reducer from './store/reducer';
import * as serviceWorker from './serviceWorker';

const persistConfig = {
  key: 'tasks',
  storage: storage,
  whitelist: ['toDo', 'inProgress', 'inReview', 'done', 'groupList'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, reducer);
const store = createStore(pReducer);
const persistor = persistStore(store);

// const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
