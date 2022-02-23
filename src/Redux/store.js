import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import reduxThunk from "redux-thunk"
import rootReducer from "./Rootreducer"


const middlewares=[reduxThunk]
// if((process.eventNames.NODE_EMV)==="development"){
// middlewares.push(logger)

//}

const store=createStore(rootReducer,applyMiddleware(...middlewares))

export default store;