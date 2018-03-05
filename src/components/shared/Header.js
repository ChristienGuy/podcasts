import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  background-color: #222;
  padding-left: 20px;
  padding-right: 20px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const WhiteLink = styled(Link)`
  color: #fff;
  margin-right: 20px;
`;

const Header = ({ logout, authentication }) => {
  return (
    <Wrapper>
      <WhiteLink to="/">Home</WhiteLink>
      <WhiteLink to="/podcast/add">Add Podcast</WhiteLink>
      {authentication.isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <WhiteLink to="/login">Login</WhiteLink>
      )}
    </Wrapper>
  );
};

export default Header;
