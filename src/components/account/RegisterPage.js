import React from 'react';

const RegisterPage = ({ registerUser }) => {
  return (
    <div>
      <form onSubmit={registerUser}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email"/>
        <label htmlFor="name">Name</label>
        <input id="name" type="text"/>
      </form>
    </div>
  );
};

export default RegisterPage;