import React from 'react';
import Login from './login';
import Spinner from './spinner';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {un : '', pw: '', status: ''};
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.submitForm     = this.submitForm.bind(this);
  }
  updateUsername(event){
    this.setState({username: event.target.value});
  }
  updatePassword(event){
    this.setState({password: event.target.value});
  }
  submitForm(event){
    this.setState({status: 'Pending...'});
    setTimeout(() => this.setState({
      status: 'Success'}), 2000)
  }
  render() {
    return (
      <div className="login">
        <div>{this.props.title}</div>
        <Login
          onUsernameChange={this.updateUsername}
          onPasswordChange={this.updatePassword}
          onSubmit={this.submitForm}/>
        <Spinner message={this.state.status}/>
      </div>
    );
  }
}
