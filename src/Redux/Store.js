
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import {middleWareDispatch} from "./middlewares"
import {rootReducer} from "./Reducer/Rootreducer"
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
const persist = {
    key: 'wa-user',
    storage,
    whitelist: ['authReducer'],
  };

  const persistedReducer = persistReducer(persist, rootReducer);

  export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, middleWareDispatch),
  );
  export const persistor = persistStore(store);
  export default store;
  