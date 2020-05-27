const INITIAL_STATE={name:"" , phone:"",shift:""};

export  default(state = INITIAL_STATE , action)=>{
    switch(action.type){
        case "Name-Update":
            return {...state , name : action.payload}
        case "Phone-Update":
            return {...state , phone : action.payload}
        case "Shift-Update":
            return {...state , shift : action.payload}
        case "Employee-Create":
            return INITIAL_STATE;
        case "Employee-Update":
            return INITIAL_STATE;
        default:
            return state;
    }
}