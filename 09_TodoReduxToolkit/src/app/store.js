import {configureStore} from '@reduxjs/toolkit'
import todoReducersss from '../features/todo/todoSlice'

export const store = configureStore({
  reducer: todoReducersss
})