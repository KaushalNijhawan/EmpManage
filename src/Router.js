import { Router, Scene } from "react-native-router-flux";
import React from "react";
import LoginForm from "./Components/Login";
import EmployeeList from "./Components/EmployeeList";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeEditForm from "./Components/EmployeeEditForm";
import FireModal from "./Components/FireModal";

class RouterComponent extends React.Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene key="login"  component={LoginForm} initial hideNavBar/>
                    </Scene>
                    <Scene key="main" >
                        <Scene key="employeelist" component={EmployeeList} hideNavBar initial/>
                        <Scene key="employeeform" component={EmployeeForm} hideNavBar/>
                        <Scene key="employeeEditForm" component={EmployeeEditForm} hideNavBar/>
                        <Scene key="fireModal" component={FireModal} hideNavBar/>
                    </Scene>
                </Scene>
            </Router>
        )
    }
}
export default RouterComponent;