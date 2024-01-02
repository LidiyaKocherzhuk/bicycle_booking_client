import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IBicycle, IBicycleData } from "../../intefaces";
import { bicycleService } from "../../services";

interface IState {
  bicycles: IBicycle[];
  availableCount: number;
  busyCount: number;
  averageCost: number;
}

const initialState: IState = {
  bicycles: [],
  availableCount: 0,
  busyCount: 0,
  averageCost: 0,
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

const create = createAsyncThunk<{ bicycle: IBicycle }, IBicycleData>(
  "bicycleSlice/create",
  async (bicycleData, { rejectWithValue }) => {
    try {
      const { data } = await bicycleService.create(bicycleData);
      return { bicycle: data };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const update = createAsyncThunk<
  { bicycles: IBicycle[] },
  { id: string; updateData: Partial<IBicycle> }
>("bicycleSlice/update", async ({ id, updateData }, { rejectWithValue }) => {
  try {
    const { data } = await bicycleService.update(id, updateData);
    return { bicycles: data };
  } catch (error) {
    return rejectWithValue(error);
  }
});

const deleteBicycle = createAsyncThunk<void, string>(
  "bicycleSlice/deleteBicycle",
  async (id, { rejectWithValue }) => {
    try {
      await bicycleService.delete(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const bicycleSlice = createSlice({
  name: "bicycleSlice",
  initialState,
  reducers: {
    deleteById: (state, action) => {
      state.bicycles = state.bicycles.filter(
        (item) => item._id !== action.payload.id,
      );
    },
    countData: (state, action: { payload: { bicycles: IBicycle[] } }) => {
      const countData = action.payload.bicycles.reduce(
        (previousValue, currentValue) => {
          previousValue.averageCost += currentValue.price;
          if (currentValue.status == "Available") {
            previousValue.availableCount++;
          }
          if (currentValue.status == "Busy") {
            previousValue.busyCount++;
          }

          return previousValue;
        },
        { averageCost: 0, availableCount: 0, busyCount: 0 },
      );

      state.availableCount = countData.availableCount;
      state.busyCount = countData.busyCount;
      state.averageCost = countData.averageCost / state.bicycles.length;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      const { bicycles } = action.payload;
      state.bicycles = bicycles;
    });
    builder.addCase(create.fulfilled, (state, action) => {
      state.bicycles.push(action.payload.bicycle);
    });
    builder.addCase(update.fulfilled, (state, action) => {
      state.bicycles = action.payload.bicycles;
    });
  },
});

const { reducer: bicycleReducer, actions } = bicycleSlice;

const bicycleActions = { ...actions, getAll, create, update, deleteBicycle };

export { bicycleReducer, bicycleActions };
