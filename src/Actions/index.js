import firebase from "firebase";
import {  Actions } from "react-native-router-flux";
export const emailChange = (text) =>{
    return {
        type:"email-changed",
        payload:text
    }
};
export const passwordChange =(text)=>{
    return {
        type:"pass-change",
        payload:text
    }
}

export const loginUser = (user)=>{
    return (dispatch)=>{
        dispatch({type:"user-login"})
        firebase.auth().signInWithEmailAndPassword(user.email,user.password)
            .then(user=>{
                dispatch({
                    type:"Login-success",
                    payload:user
                })
                Actions.main();
            })
            
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
                .then(user=>{
                    dispatch({
                        type:"Login-success",
                        payload:user
                    })
                })
                .catch(() =>{
                    dispatch({
                        type:"Login-failed",
                        payload: "Authentication Failed!"
                    })
                })
            })
    }
}
