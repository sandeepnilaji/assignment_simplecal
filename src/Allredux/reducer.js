import { ADD_COUNT, ADD_TODO, SUB_COUNT} from "./actiontypes.js"


//reducer
export const reduceFn=(state,{type,payload})=>{
    switch(type){
        case ADD_COUNT:
            return{
                ...state,
                counter:state.counter+payload
            }
        case SUB_COUNT:
            return{
                ...state,
                counter:state.counter-payload
            }
        case ADD_TODO :
            return{
                ...state,
                todo:[...state.todo,{...payload}]
            }
        default:
            return{...state}
    }
}