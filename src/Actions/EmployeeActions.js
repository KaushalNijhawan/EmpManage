import firebase from "firebase";
import { Actions } from "react-native-router-flux";
export const employeeNameUpdate = (text)=>{
    return{
        type:"Name-Update",
        payload:text

    }
}
export const employeePhoneUpdate = (text) =>{
    return {
        type:"Phone-Update",
        payload:text
    }
}
export const employeeShiftUpdate = (text)=>{
    return{
        type:"Shift-Update",
        payload:text
    }
}
export const employeeCreate = (Employee) =>{
    const {name,shift,phone} = Employee;
    const {currentUser} = firebase.auth();
    return (dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`).push({name,shift,phone})
        .then(()=>{
            dispatch({type:"Employee-Create"})
     
        })
        Actions.employeelist();
    }
        
    
}
export const employeeFetch = () =>{
    const { currentUser } = firebase.auth();
    return (dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`).on('value' , snapshot=>{
            dispatch({
                type:"Employee-Fetch",
                payload: snapshot.val()
            })
        })
        
    };
}
export const employeeUpdatDetails = (User)=>{
    const {currentUser} = firebase.auth();
    const {name , phone , shift , uid} = User;
    return (dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees/${User.uid}`)
    .set({name,phone,shift})
    .then(()=>{
        dispatch({type:"Employee-Update"})
        Actions.employeelist();
    })
       
}
    
    
}
export const employeeDelete = (uid)=>{
    const {currentUser} = firebase.auth();
    return ()=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(()=>{
            Actions.employeelist();
        })
    }
}