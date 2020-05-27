import React from "react";
import { View, Picker, TouchableOpacity} from "react-native";
import { Text, Button, Input } from "react-native-elements";
import {connect} from "react-redux";
import {employeeNameUpdate, employeeShiftUpdate,employeePhoneUpdate,employeeCreate} from "../Actions/EmployeeActions";

class EmployeeForm extends React.Component {
    constructor(){
        super();
        this.state = {
            modal:false
        }
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
    handleCreateofEmployee =()=>{
        const Employee = {
            name:this.props.name,
            shift: this.props.shift,
            phone: this.props.phone
        }
        
        this.props.employeeCreate(Employee);
    }
    
   
    
    
    render() {
        
        return (
 
                <View style={{borderWidth:2 , marginTop:150 , marginHorizontal:10 , borderRadius:10}}>
                   
                    <View style={{ marginTop: 10, height: 50}}>
                        {this.props.employee!== undefined ? <Text h4 style={{ alignSelf: "center"}}>
                            Edit Employee!
                </Text> : <Text h4 style={{ alignSelf: "center"}}>
                            Employee Form!
                </Text>}
                    </View>
                    <View>
                        <View style={{ flexDirection: "row" , marginTop:20 , marginHorizontal:10, width:270}}>
                            <Text style={{ fontSize: 25, marginTop: 20 }}>Name</Text>
                            <Input placeholder={this.props.employee!== undefined ? this.props.employee.name: "Name"}  onChangeText={(term)=>this.handleChangeInName(term)}/>
                        </View >
                        <View style={{ flexDirection: "row" , marginTop:20, marginHorizontal:10, width:270 }}>
                            <Text style={{ fontSize: 25, marginTop: 20 }}>Phone</Text>
                            <Input placeholder={this.props.employee!== undefined ? this.props.employee.phone: "Contact"} onChangeText ={(term)=>this.handleChangeInPhone(term)} maxLength={10} keyboardType={'numeric'}   />
                        </View>
                        <View style={{ flexDirection: "row" , marginTop:20, marginHorizontal:10, width:270}}>
                        <Text style={{ fontSize: 25, marginTop: 20 }}>Shift</Text>
                            <Picker
                                style={{ height: 50, width: 250, marginLeft: 70, fontSize: 30 }}
                                onValueChange ={(term)=>this.handleChangeInShift(term)}
                                selectedValue={this.props.shift}
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
                          
                       <TouchableOpacity onPress={() => this.handleCreateofEmployee()} style={{ height: 50, borderWidth: 2, width: 200, marginTop: 50, alignSelf: "center", borderColor: "#85d7f2" , borderRadius:20, marginBottom:20}}>
                            <Text style={{ fontSize: 30, alignSelf: "center", color: "#85d7f2" }}>Create</Text>
                        </TouchableOpacity>                       
                        
                    </View>
                    </View>
        );
    }
}
const mapStatetoProps =(state)=>{
    return{
        name : state.emp.name,
        phone : state.emp.phone,
        shift:state.emp.shift
    }
}
export default connect(mapStatetoProps,{employeeNameUpdate,employeePhoneUpdate,employeeShiftUpdate,employeeCreate})(EmployeeForm);