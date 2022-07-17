import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAllUsersStatus, fetchAllUsers, postOneUser } from '../../apis/users'

// State and reducers:
export const usersSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    addUsers (state, action) {
      console.log('addUsers action called')
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchUsersStatus.pending, (state, action) => {
      })
      .addCase(fetchUsersStatus.fulfilled, (state, action) => {
        console.log(action)
        state.userStatus = action.payload
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(postUser.fulfilled, (state, action) => {
        console.log('postUser fulfilled')
      })
      .addCase(postUser.rejected, (state, action) => {
        console.log('postUser rejected: ', action)
      })
  }
})

// Selectors:
export const selectUsers = (state) => state.users

// Thunk

export const fetchUsersStatus = createAsyncThunk('fetchUsersStatus', async () => {
  const response = await fetchAllUsersStatus()
  return response
})

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
  const response = await fetchAllUsers()
  return response
})

export const postUser = createAsyncThunk('postUser', async (name) => {
  const response = await postOneUser(name)
  return response
})

// Export Reducer:

export default usersSlice.reducer