import React, { useState } from "react";
import { View ,Modal} from "react-native";
import { Text, Button } from "react-native-elements";
import Overlay from 'react-native-modal-overlay';
import { Actions } from "react-native-router-flux";
import {connect} from "react-redux";

class FireModal extends React.Component {

    constructor() {
        super()
        this.state = {
            visible:true
        }
    }
    onClose = () =>{
        this.setState({ visible: false});
        Actions.employeelist();
    } 
    render() {
        return (
            
            <Modal visible={this.state.visible} onRequestClose={this.onClose} animationType="slide" style={{height:100, width:200}} transparent>
                <Text>{"Are You Sure Want To Fire  " + this.props.Namee.name } </Text>
                <View style={{flexDirection:"row" ,  marginTop:10}}>
                    <View style={{marginRight:30}}>
                <Button title= "Yes" onPress = {()=>this.onClose()} style = {{marginLeft:20}}/>
                </View>
                <View>
                <Button title= "No" onPress={()=>this.onClose()}/>
                </View>
                </View>
            </Modal>
                
              )
    }
}
export default connect(null , {})(FireModal);