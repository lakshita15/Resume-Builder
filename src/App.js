import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Education from './components/education';
import Finalize from './components/finalize';
import Header from './components/header';
import Landing from './components/landingPage';
import Register from './components/register';
import SignIn from './components/signin';
import Templates from './components/templates';


function App(props) {
  let {auth} = props;

  return (
    <React.Fragment>
    <Header />
    <Switch>
      <Route path="/" exact component = {Landing}></Route>
      <Route path="/templates" exact component={ auth.uid ? Templates : SignIn}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/register" exact component = {auth.uid ? Landing : Register}></Route>
      <Route path="/signin" exact component = {auth.uid ? Landing : SignIn}></Route>
      <Route path="/contact" exact component={ auth.uid ? Contact : SignIn}></Route>
      <Route path="/education" exact component={auth.uid ? Education : SignIn}></Route>
      <Route path="/finalize" exact component={auth.uid ? Finalize : SignIn}></Route>
    </Switch>
    </React.Fragment>
  );
}

const mapStateToProps = (state)=>{
return{
  auth : state.firebase.auth
}
}


export default connect(mapStateToProps)(App);
