import { combineReducers } from "@reduxjs/toolkit"
import filtersReducer from "../features/filter/filterSlice"

const rootReducer = combineReducers({
    filters: filtersReducer,
  })
  
  export type RootState = ReturnType<typeof rootReducer>
  
  export default rootReducer