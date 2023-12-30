import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

type RootStore = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootStore, AppDispatch };

export { store };
