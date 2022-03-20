const initialState = []

export default function cartreducer(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case "ADDCART":
            return [...state,payload]
        default:
            return state    

    }
}