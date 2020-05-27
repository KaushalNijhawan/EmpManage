import React from "react";
import { View, TouchableOpacity, Picker,Alert ,Linking} from "react-native";
import { Input, Text } from "react-native-elements";
import Communications from 'react-native-communications';
import {connect} from "react-redux";
import {employeeUpdatDetails,employeeDelete,employeeNameUpdate,employeePhoneUpdate,employeeShiftUpdate} from "../Actions/EmployeeActions";
import { Actions } from "react-native-router-flux";
class EmployeeEditForm extends React.Component {
    submitForm=(term)=>{
        console.log(term);
    }
    handleChangeInName =(term)=>{
        this.props.employeeNameUpdate(term);
    }
    handleChangeInPhone =(term)=>{
        this.props.employeePhoneUpdate(term);
    }
    handleChangeInShift=(term)=>{
        console.log(term)
        this.props.employeeShiftUpdate(term);
    }
    handleEditForm =()=>{
        const user= {
            name:"",
            phone:"",
            shift:"",
            uid:this.props.employee.uid
        }
        if(this.props.name=== ""){
            user.name = this.props.employee.name
        }else{
            user.name = this.props.name
        }
        if(this.props.shift === ""){
            user.shift = this.props.employee.shift
        }else{
            user.shift = this.props.shift
        }
        if(this.props.phone=== ""){
            user.phone = this.props.employee.phone
        }else{
            user.phone = this.props.phone
        }
        
        this.props.employeeUpdatDetails(user);
    }
    sendOnWhatsApp=() => {
        const mobile = this.props.employee.phone;
        const msg = this.props.employee.name;
        if(mobile){
          if(msg){
            let url = 'whatsapp://send?text=' + "Hello this is a message from me" + '&phone=91' + this.props.employee.phone;
            Linking.openURL(url).then((data) => {
              console.log('WhatsApp Opened');
            }).catch(() => {
              alert('Make sure Whatsapp installed on your device');
            });
          }else{
            alert('Please insert message to send');
          }
        }else{
          alert('Please insert mobile no');
        }
      }
   handleAltertInForm = ()=>{
    Alert.alert(
        "Warning",
        "Are You Want To Fire " + this.props.employee.name,
        [
          {
            text: "No",
            onPress: () =>{
            
            Actions.employeelist();
        } ,
            style: "cancel"
          },
          { text: "Yes", onPress: () =>{
            this.props.employeeDelete(this.props.employee.uid);
            
            }  }
        ],
        { cancelable: false }
      );
   }
    render() {
        
        return (
            <View style={{ borderWidth: 2, marginTop: 150, marginHorizontal: 10, borderRadius: 10 }}>

                <View style={{ marginTop: 10, height: 50 }}>
                    <Text h4 style={{ alignSelf: "center" }}>
                        Edit Employee!
                    </Text>
                </View>
                <View>
                    <View style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 10, width: 270 }}>
                        <Text style={{ fontSize: 25, marginTop: 20 }}>Name</Text>
                        <Input placeholder="Name" onChangeText={(term) => this.handleChangeInName(term)}  defaultValue = {this.props.employee.name}/>
                    </View >
                    <View style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 10, width: 270 }}>
                        <Text style={{ fontSize: 25, marginTop: 20 }}>Phone</Text>
                        <Input onSubmitEditing={(term)=>this.submitForm(term)} placeholder="Contact" onChangeText={(term) => this.handleChangeInPhone(term)} defaultValue={this.props.employee.phone} maxLength={10} keyboardType={'numeric'}/>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 10, width: 270 }}>
                        <Text style={{ fontSize: 25, marginTop: 20 }}>Shift</Text>
                        <Picker
                            style={{ height: 50, width: 250, marginLeft: 70, fontSize: 30 }}
                            onValueChange={(term) => this.handleChangeInShift(term)}
                            selectedValue={this.props.employee.shift }
                        >
                            <Picker.Item label="Select Shift" value="" />
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />
                        </Picker>
                    </View>
                            <TouchableOpacity onPress={() => this.handleEditForm()} style={{ height: 50, borderWidth: 2, width: 200, marginTop: 50, alignSelf: "center", borderColor: "#85d7f2", borderRadius: 20, marginBottom: 20 }}>
                                <Text style={{ fontSize: 30, alignSelf: "center", color: "#85d7f2" }}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.sendOnWhatsApp()} style={{ height: 50, borderWidth: 2, width: 200, marginTop: 50, alignSelf: "center", borderColor: "#85d7f2", borderRadius: 20, marginBottom: 20 }}>
                                <Text style={{ fontSize: 30, alignSelf: "center", color: "#85d7f2" }}>Text-Schedule</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.handleAltertInForm()} style={{ height: 50, borderWidth: 2, width: 200, marginTop: 50, alignSelf: "center", borderColor: "#85d7f2", borderRadius: 20, marginBottom: 20 }}>
                                <Text style={{ fontSize: 30, alignSelf: "center", color: "#85d7f2" }}>Fire</Text>
                            </TouchableOpacity>
                      

                </View>
           
            </View>
        )
    }
}
const mapStatetoProps = state =>{
    return{
        name : state.emp.name,
        phone : state.emp.phone,
        shift:state.emp.shift
    }
}
export default connect(mapStatetoProps,{employeeUpdatDetails,employeeDelete,employeeShiftUpdate,employeeNameUpdate,employeePhoneUpdate})(EmployeeEditForm);