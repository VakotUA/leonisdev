import { createSlice } from '@reduxjs/toolkit'

interface MenuState {
  isActive: boolean
}

const initialState: MenuState = {
  isActive: false,
}

export const menuSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isActive = !state.isActive
    },
  },
})

export default menuSlice.reducer
