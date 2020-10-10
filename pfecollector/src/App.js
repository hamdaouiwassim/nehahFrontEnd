import React , { useEffect } from 'react';


import './App.css';
import Signin from './containers/signin';
import Signup from './containers/signup';
import Home from './containers/home';
import { Route,Switch } from 'react-router-dom';
import PrivateRoute from './components/HOC/PrivateRoute'
import { isUserLoggedIn } from './actions'
import {  useDispatch , useSelector } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  useEffect(() =>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
  
  
  },[])
  return (
    <div className="App">
          {/* <Layout >
            <h1> Hello world </h1>
          </Layout> */}
        
            <Switch>
                <PrivateRoute path="/" exact component={Home} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
            </Switch>
          
    </div>
  );
}

export default App;
