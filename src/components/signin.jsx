import React, { Component } from "react";
import signinImg from "../static/images/login.jpg"
import "./signin.css";
import { connect } from "react-redux";
// import {auth, provider} from "../firebase/fbconfig";
import { login } from "../actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  onChangeHandler = (e) => {
    e.preventDefault();
    let id = e.target.id;
    let value = e.target.value;

    this.setState({
      ...this.state,
      [id]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
    // this.history.pushState("/templates");
  };



  render() {
    return (
      <React.Fragment>
      <div className="signin-form">
        <div className="signin-heading">
          <h1>Sign In</h1>
        </div>
        <div className="signin-form-details">
          <div className="details">

          <div className="input-group full">
            <label htmlFor="">Email</label>
            <input
              type="text"
              id="email"
              value={this.state.email}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
            />
          </div>
          <div className="input-group full">
            <label htmlFor="">Password</label>
            <input
             type="password" name="password" id="password" placeholder="Password"
              value={this.state.password}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
            />
          </div>
          <div className="input-group full">
            <button className="btn" onClick={this.onSubmit}>
              Sign In
            </button>
          </div>
         
          <div className="input-group full">
            {this.props.message && <span>{this.props.message}</span>}
          </div>
          </div>
          <div>
          <img src={signinImg} alt="" className="signin-img"/>
          </div>
        </div>


      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    
  return {
    message: state.auth.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userDetails) => {
      dispatch(login(userDetails));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
