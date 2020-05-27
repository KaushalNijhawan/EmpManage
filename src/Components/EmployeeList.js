import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/Fontisto";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { employeeFetch } from "../Actions/EmployeeActions";
import _ from "lodash";

class EmployeeList extends React.Component {
    componentDidMount() {
        this.props.employeeFetch();

    }
    handleEditEmployee =(i)=>{
       Actions.employeeEditForm({employee : i});
    }
    render() {
        const l = this.props.emp;
        return (
            <View>
                <View style={{ flexDirection: "row", marginTop: 10, borderBottomWidth: 2 }}>
                    <Text style={{ alignSelf: "flex-start", flex: 1, fontSize: 40, fontWeight: "bold" }}>Employees</Text>
                    <TouchableOpacity onPress={() => Actions.employeeform()}>
                        <Icon name="plus-a" size={50} style={{ marginRight: 15 }} />
                    </TouchableOpacity>
                </View>
                
                <View>
                    {
                        this.props.emp.map((l, i) => (
                            <TouchableOpacity onPress = {()=>this.handleEditEmployee(l)}>
                            <ListItem
                                key={i}
                                title={l.name}
                                bottomDivider
                            />
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        );
    }
}
const mapStatetoProps = (state) => {
    const employees = _.map(state.empFetch, (val, uid) => {
        return { ...val, uid };
    });
    return { emp: employees };
}
export default connect(mapStatetoProps, { employeeFetch })(EmployeeList);