import React from 'react';

export default function Username(props) {
  function onFormSubmit(event){
    event.preventDefault();
    props.onSubmit(event);
  }
  return (
    <form onSubmit={onFormSubmit}>
      <label>Username:</label>
      <input onChange={props.onUsernameChange} type="text" required/>

      <label>Password:</label>
      <input onChange={props.onPasswordChange} type="password" required/>

      <button type="submit">Add</button>
    </form>
  );
}
