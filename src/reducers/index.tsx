import {combineReducers} from 'redux';
import infoReducer from "../reducers/info/infoReducer";
import { store } from '../store';

export default  combineReducers ({
    information: infoReducer
})

export type RootState = ReturnType<typeof store.getState>
