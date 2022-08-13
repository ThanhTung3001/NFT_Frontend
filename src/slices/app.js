import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstLoad: true,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setFirstLoad: (state, action) => {
      state.firstLoad = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setFirstLoad } = appSlice.actions

export default appSlice.reducer
