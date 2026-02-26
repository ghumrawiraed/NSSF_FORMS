import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import establishmentService from "../../services/establishmentService";
import { toast } from "react-toastify";
const initialState = {
  establishment: null,
  isLoading: false,
  isSuccess: false,
  isError: null,
  message: "",
};




// get a single establishment
export const getEstablishment = createAsyncThunk(
  "establishment/getEstablishment",
  async (id, thunkAPI) => {
    try {
      console.log("EST ID:",id)
      return await establishmentService.getEstablishment(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// UPDATE A Establishment

export const updateEstablishment = createAsyncThunk(
  "establishment/updateEstablishment",
  async ({ id, formData }, thunkAPI) => {
    try {
      console.log("UPDATE Est IN SLICE")
      console.log(formData)
      
      return await establishmentService.updateEstablishment(id, formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

const establishmentSlice = createSlice({
  name: "establishment",
  initialState,
  reducers: {
    SAVE_ESTABLISHMENT(state, action) {
      const profile = action.payload;
      state.establishment.est_name = profile.est_name;
    },
  },

  // extraReducers will store responses that comes from createAsyncThunk
  extraReducers: (builder) => {
    builder

      
      // getEstablishment  in progress case
      .addCase(getEstablishment.pending, (state) => {
        state.isLoading = true;
      })
      // get Establishment sucessfull  case
      .addCase(getEstablishment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.establishment = action.payload;
      })
      //  error get Establishment case
      .addCase(getEstablishment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // update Establishment  in progress case
      .addCase(updateEstablishment.pending, (state) => {
        state.isLoading = true;
      })
      // update Establishment sucessfull  case
      .addCase(updateEstablishment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.establishment = action.payload;
      })
      //  error updating Establishment case
      .addCase(updateEstablishment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

    },
});

export const selectIsLoading = (state) => state.establishment.isLoading;
export const selectEstablishment = (state) => state.establishment.establishment;

export const { SAVE_ESTABLISHMENT } = establishmentSlice.actions;

export default establishmentSlice.reducer;
