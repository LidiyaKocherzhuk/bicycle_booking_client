import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IBicycle } from "../../intefaces";
import { bicycleService } from "../../services";

interface IState {
  bicycles: IBicycle[];
}

const initialState: IState = {
  bicycles: [],
};

const getAll = createAsyncThunk<{ bicycles: IBicycle[] }, void>(
  "bicycleSlice/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await bicycleService.getAll();
      return { bicycles: data };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const bicycleSlice = createSlice({
  name: "bicycleSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.bicycles = action.payload.bicycles;
    });
  },
});

const { reducer: bicycleReducer, actions } = bicycleSlice;

const bicycleActions = { ...actions, getAll };

export { bicycleReducer, bicycleActions };
