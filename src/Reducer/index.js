import { combineReducers } from "redux";
import cartreducer from "./cartreducer";
const reducer = combineReducers({
    cartreducer:cartreducer
})

export default reducer;