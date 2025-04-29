import {produce} from 'immer'
export const InitialState ={
    arrshopping:[
    {codeShopping:1,codeUser:1,date:"07/05/13",sum:300,arr:[{name:"shirt",acount:2},{name:"pents",acount:1}]},
    {codeShopping:2,codeUser:4,date:"04/01/05",sum:100,arr:[{name:"shirt",acount:1}]},
    {codeShopping:3,codeUser:2,date:"07/05/22",sum:100,arr:[{name:"pents",acount:1}]},
    {codeShopping:4,codeUser:3,date:"07/05/23",sum:100,arr:[{name:"dress",acount:1}]},
    {codeShopping:5,codeUser:5,date:"07/08/24",sum:200,arr:[{name:"shirt",acount:1},{name:"pents",acount:1}]},
]}

export const dataShopping=produce((state,action)=>{
 switch(action.type){
 default:
 break;
 }
},InitialState)