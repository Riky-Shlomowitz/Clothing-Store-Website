import { combineReducers } from "redux";
import {createStore} from 'redux'; 
import {dataUser} from './userReduser';
import {dataShopping} from './shppingReduser';
import {dataclothes} from'./clothesRduser';
import {dataCategory} from './categoryRaducer';
import {dataCartReducer} from './cartReduser';

export const dataReducer =combineReducers({dataUser,dataShopping,dataclothes,dataCategory,dataCartReducer})
export const store=createStore(dataReducer)
window.store=store;









// import { datareducer } from "./dataReducer";
// const reducer=datareducer;




