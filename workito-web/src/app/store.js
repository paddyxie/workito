import { configureStore } from '@reduxjs/toolkit'
import scrumReducer from '../scrum/scrumSlice'

export default configureStore({
  reducer: {
    scrum: scrumReducer
  }
})