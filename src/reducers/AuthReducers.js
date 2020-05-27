const initial_state = {email:"", password:"",user:null,err : "",loading:false}

export default  (state=initial_state,action) =>{
    switch(action.type){
        case "email-changed":
            return {...state,email:action.payload}
        case "pass-change":
            return {...state , password: action.payload}
        case "Login-success":
            return {...state , user : action.payload , err : "",loading:false}
        case "Login-failed":
            return  {...state , err : action.payload,loading:false}
        case "user-login":
            return {...state , loading:true,err:""}
        default:
            return state
    }
}