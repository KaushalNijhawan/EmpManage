import React from "react";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import {emailChange,passwordChange ,loginUser} from "../Actions/index";
import {connect} from "react-redux";


class LoginForm extends React.Component {
    
    handleEmailChange=(term)=>{
        this.props.emailChange(term);
    }
    handleChangePassword=(term)=>{
        this.props.passwordChange(term);
    }
    handleLoginOfPage=()=>{
       // console.log(this.props);
        const user ={
            email : this.props.email,
            password : this.props.password
        }
        this.props.loginUser(user);
    }
    handleErrorForLogin=()=>{
        this.props.email = "";
        this.props.password = "";
        return <Text style={{fontSize:20,color:"red",alignSelf:"center"}}>{this.props.error}</Text>
    }
    render() {
        return (
            <View style={{backgroundColor:"#06F4F6" , height:"100%"}}>

                <View style={{marginTop:250 , marginHorizontal:15 ,elevation:8, height: 370 ,width:380, shadowOffset:{ width:0,height:20}, shadowColor:"#000",shadowRadius:100, shadowOpacity:0.25, backgroundColor:"white",borderRadius:500}}>
                    
                    <Text style={{ marginLeft: 150 , marginTop:15, fontWeight:"bold" , fontSize:25, color:"#6DC9EC"}}>
                        Login!
                    </Text>
                    <View style={{marginHorizontal:20 , marginTop:30,fontSize:25}}>
                    <Input placeholder="Email" onChangeText ={(term)=>this.handleEmailChange(term)} value={this.props.email}/>
                    <Input value ={this.props.password} secureTextEntry placeholder="Password"  inputStyle={{marginTop:20}} onChangeText = {(term)=>this.handleChangePassword(term)}/>
                    </View>
                    <View>
                        {this.props.error.length!= 0 ? this.handleErrorForLogin() : null}
                    </View>
                   <TouchableOpacity style={{marginLeft:20 ,marginTop:20}} onPress={()=>this.handleLoginOfPage()}>
                       {this.props.loading === true ? <ActivityIndicator size={50} color="#6DC9EC" /> : <Icon name="md-arrow-dropright-circle"  size ={70} style={{alignSelf:"center",color:"#6DC9EC"}}/>}
                       
                   </TouchableOpacity>
                    
                </View>

            </View>
        )
    }
} 
const mapStatetoProps =state=>{
    return {
        email : state.auth.email,
        password:state.auth.password,
        error : state.auth.err,
        loading:state.auth.loading
    }
}
export default connect(mapStatetoProps , {emailChange,passwordChange,loginUser})(LoginForm);