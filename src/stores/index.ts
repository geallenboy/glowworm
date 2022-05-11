import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

const files: any = import.meta.globEager('@/view/**.slice.ts');
const reducers = {},
  reg = /([^/]+)\.slice\.ts/i,
  middlewares: any[] = [];

files.keys().forEach((key: string) => {
  const k = key.match(reg);
  if (k != null) {
    const d = files(key).default;
    const n = d.reducerPath || k[1];
    Object.assign(reducers, { [n]: d.reducer });
    d.middleware && middlewares.push(d.middleware);
  }
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
});

setupListeners(store.dispatch);
