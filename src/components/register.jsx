import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signup } from '../actions/authActions';

import "./register.css";


class Register extends Component {
    state = { 
        fname:"",
        lname:"",
        email:"",
        password:""
     }


     onChangeHandler = (e) =>{
         e.preventDefault();
         let id = e.target.id;
         let value = e.target.value;
         this.setState({
             ...this.state ,
             [id] : value
         })
     }

     onSignUp = () =>{
         this.props.signup(this.state)
     }
    render() { 
        return ( 
            <div className="signup-form">
                        <div className="signup-heading">
                            <h1>Sign Up</h1>
                        </div>
                        <div className="signup-form-details">
                            <div className="input-group full">
                                <label htmlFor="">First Name</label>
                                <input type="text" id="fname" value={this.state.fname} onChange={ (e) =>{  this.onChangeHandler(e)  }   }/>
                            </div>
                            <div className="input-group full">
                                <label htmlFor="">Last Name</label>
                                <input type="text" id="lname" value={this.state.lname} onChange={ (e) =>{  this.onChangeHandler(e)  }   }/>
                            </div>
                            <div className="input-group full">
                                <label htmlFor="">Email</label>
                                <input type="text" id="email" value={this.state.email} onChange={ (e) =>{  this.onChangeHandler(e)  }   }/>
                            </div>
                            <div className="input-group full">
                                <label htmlFor="">Password</label>
                                <input type="text" id="password" value={this.state.password} onChange={ (e) =>{  this.onChangeHandler(e)  }   }/>
                            </div>
                            <div className="input-group full">
                                <button className="btn" onClick={this.onSignUp}>Sign Up</button>
                            </div>
                            <div className="input-group full">
                               {this.props.message && <span>{this.props.message}</span>}
                            </div>
                        </div>
             </div>
         );
    }
}
 
const mapPropsToState = (state) =>{
    return {
        message : state.auth.message
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        signup : (userDetails) => {dispatch(signup(userDetails))}
    }
}

 
export default connect(mapPropsToState , mapDispatchToProps)(Register);