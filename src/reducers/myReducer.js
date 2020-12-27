
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const { combineReducers } = require("redux");
const { authReducer } = require("./authReducer");
const { contactReducer } = require("./contactReducer");
const { documentReducer } = require("./documentReducer");
const { educationReducer } = require("./educationReducer");





export const myReducer = combineReducers({
    auth : authReducer,
    contactDetails : contactReducer ,
    educationDetails : educationReducer ,
    document : documentReducer,
    firebase : firebaseReducer,
    firestore : firestoreReducer
})
