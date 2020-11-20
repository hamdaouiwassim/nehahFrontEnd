import React , { useEffect } from 'react';
import './App.css';
import Signin from './containers/signin';
import Signup from './containers/signup';
import Home from './containers/home';
import { Route,Switch } from 'react-router-dom';
import PrivateRoute from './components/HOC/PrivateRoute'
import { getInitialData, isUserLoggedIn } from './actions'
import {  useDispatch , useSelector } from 'react-redux'
import Idees from './containers/idees';
import Projects from './containers/projects';
import Commentaires from './containers/commentaires';
import Utilisateurs from './containers/users';
import Profile from './containers/profile';
import Presentations from './containers/presentations';
import Rapports from './containers/rapports';
import Evaluations from './containers/evaluations';
//import { getInitialData } from './actions/initialData.actions';
function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  useEffect(() =>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
    dispatch(getInitialData());
  
  
  },[])
  return (
    <div className="App">
          {/* <Layout >
            <h1> Hello world </h1>
          </Layout> */}
        
            <Switch>
                <PrivateRoute path="/" exact component={Home} />
                <PrivateRoute path="/idees"  component={Idees} />
                <PrivateRoute path="/projects"  component={Projects} />
                <PrivateRoute path="/commentaires"  component={Commentaires} />
                <PrivateRoute path="/utilisateurs"  component={Utilisateurs} />
                <PrivateRoute path="/presentations"  component={Presentations} />
                <PrivateRoute path="/rapports"  component={Rapports} />
                <PrivateRoute path="/evaluations"  component={Evaluations} />
                <PrivateRoute path="/profile"  component={Profile} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
            </Switch>
          
    </div>
  );
}

export default App;
