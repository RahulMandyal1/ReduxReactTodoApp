import {ADD_TODO , DELETE_TODO , UPDATE_TODO} from  "./todoTypes";

//this function is to perform add todo action
export function addTodo(payload){
    return {
        type : ADD_TODO,
        payload : payload
    }
}

//this function  to delete  a todo 
export function deleteTodo( payload){
    return {
        type : DELETE_TODO,
        payload : Number(payload)
    }
}

//this function is perform update action 
export function udpateTodo(payload){
    return {
        type : UPDATE_TODO,
        payload : Number(payload)
    }
}