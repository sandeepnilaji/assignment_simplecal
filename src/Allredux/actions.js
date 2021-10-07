//action creator
export const addcount = (data)=>{
    return {type:"ADD_COUNT",payload:data}
}

export const addtodo =(data)=>{
    return({type:"ADD_TODO",payload:data})
}

export const subcount =(data)=>{
    return({type:"SUB_COUNT",payload:data})
}
