import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; // 세션 스토리지 선택

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

console.log('리덕스 상태', store.getState());
let persistor = persistStore(store);

export { store, persistor };
