import React, { Component } from 'react';
import { Route,Switch,Redirect } from "react-router-dom";
import TopNavbar from './components/header/topNav';
import ConatentHeader from './components/contents/contentHeader';
import './App.css';
import {login} from './lib/lib';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './docs/container/container_css.css';
import './docs/container/floating-labels.css';
import './docs/topnav/nav.css';


class App extends Component {
  state={
    userId:100,
    user:'mahim'
  }

  test= ()=>{
    let test= this.state.user;
    console.log(test)
  }
   handleLogin= (data)=>{
     console.log('data: ',data);
    this.setState((state, props) => {
      console.log('obj: ', state.user)
      return {user:'mogib'}
      
    }
    )
  // const afterLogin= login(this.state.userId);
  // this.setState({userId:afterLogin})
  // console.log(afterLogin,'after update');
   this.test()
  }
   responseFacebook = (response) => {
    console.log(response);
  }
  
  render() {
    
    return (
      <div>
       <TopNavbar loginFacebook={this.responseFacebook}></TopNavbar>
       <div className="App">
      <header className="App-header">
      <Switch>
      <Route path="/" render={(props)=> <ConatentHeader  {...props} />}/>



      {/* <Route path="/not-found" component={NotFound}/>
      <Redirect from="/name" to="/admin"/>
      <Redirect to="/not-found"/> */}
      </Switch>
      </header>
    </div>
      </div>

      
    );
  }
}

export default App;
