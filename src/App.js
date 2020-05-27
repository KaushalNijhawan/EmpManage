import React from 'react';
import ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import firebase from 'firebase';
import LoginForm from './Components/Login';
import RouterComponent from './Router';
class App extends React.Component {
  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyB4D46Y2lV_-LQgRcyOte-YdJFKwaihuKs",
      authDomain: "manager-87ab5.firebaseapp.com",
      databaseURL: "https://manager-87ab5.firebaseio.com",
      projectId: "manager-87ab5",
      storageBucket: "manager-87ab5.appspot.com",
      messagingSenderId: "1097561248848",
      appId: "1:1097561248848:web:1ae916c909add75cd82d55",
      measurementId: "G-JBP8X2842R"
    };
    firebase.initializeApp(firebaseConfig);
  }
  render(){
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <RouterComponent/>
      </Provider>    
    )
  }
  
};


export default App;
