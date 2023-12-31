import { configureStore } from "@reduxjs/toolkit";

import { bicycleReducer } from "./slices";

const store = configureStore({
  reducer: {
    bicycleReducer,
  },
});

type RootStore = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootStore, AppDispatch };

export { store };
