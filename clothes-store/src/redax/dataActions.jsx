export const change_user=(user)=>{
    return {type:"CANGE_USER",payload:user}
} 

export const change_manager=(manager)=>{
    return {type:"CANGE_MANAGER",payload:manager}
} 

export const change_list=(item)=>{
    return {type:"CANGE_LIST",payload:item}
} 

export const change_counter=(counter)=>{
    return {type:"CANGE_COUNTER",payload:counter}
} 

export const change_listCategory=(item1)=>{
    return {type:"CANGE_LIST_CATEGORY",payload:item1}
} 

export const change_counterCategory=(counter1)=>{
    return {type:"CANGE_COUNTER_CATEGORY",payload:counter1}
} 
export const currrent_user=(c)=>{
    return{type:"SET-CURRUSER",payload:c}
}
export const plus=(c,x)=>{
    return{type:"PLUS",payload:c,x}
}
export const minus=(c,x)=>{
    return{type:"MINUS",payload:c,x}
}
export const addToCart=(x)=>{
    return{type:"ADD",payload:x}
}
export const set_mone=(x)=>{
    return{type:"SET_MONE",payload:x}
}
export const add=(x)=>{
    return{type:"ADD_USER",payload:x}
}