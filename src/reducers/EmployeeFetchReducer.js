const initial_state ={};

export default (state = initial_state, action)=>{
    switch(action.type){
        case "Employee-Fetch":
            //console.log(action.payload);
            return action.payload;
        
        default:
            return state
    }
}