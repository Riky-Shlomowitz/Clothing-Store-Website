import {produce} from 'immer'
export const InitialState ={
    arrCategory:[
    {code:1,name:"women"},
    {code:2,name:"men"},
    {code:3,name:"girls"},,
    {code:4,name:"boy"},
    {code:5,name:"baby"}
],counter:6
  
    
}

export const dataCategory=produce((state,action)=>{
 switch(action.type){
    case "CANGE_LIST_CATEGORY": { state.arrCategory = action.payload; break; }
    case "CANGE_COUNTER_CATEGORY": { state.counter = action.payload; break; }
 default:
 break;
 }
},InitialState)