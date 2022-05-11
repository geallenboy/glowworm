import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';

import { rootPersistConfig, rootReducer } from './rootReducer';

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })
});

const persistor = persistStore(store);

const useSelector = useReduxSelector;

const useDispatch = () => useReduxDispatch();

export { persistor, store, useDispatch, useSelector };
