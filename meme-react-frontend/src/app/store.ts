import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import memesReducer from '../features/memes/memesSlice';

export const store = configureStore({
  reducer: {
    memes: memesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
