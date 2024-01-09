import { configureStore } from '@reduxjs/toolkit'
import amountReducer from './reducers/amountReducer'

export const store = configureStore({
   reducer : {
      amount : amountReducer
   }
});