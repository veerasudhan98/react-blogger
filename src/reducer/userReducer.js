const userReducer = (state=[], action) =>{
    if(action.type==="FETCH_USER"){
        return [...state, action.payload]
    }
    return state
}
export default userReducer