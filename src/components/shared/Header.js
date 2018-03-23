import React, { Fragment } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { AuthenticationState } from "../../constants/authenticationState";
import { PodcastState } from "../../constants/podcastState";
import PropTypes from "prop-types";

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

export const Header = ({ logout, authentication, podcastState }) => {
  return (
    <Wrapper>
      { podcastState === PodcastState.UPDATING && <span>Updating Podcasts</span> }
      <WhiteLink to="/">Home</WhiteLink>
      {authentication.authenticationState === AuthenticationState.LOGGED_IN ? (
        <Fragment>
          <WhiteLink to="/podcast/add">Add Podcast</WhiteLink>
          <LogoutButton onLogout={logout} />
        </Fragment>
      ) : (
        <WhiteLink to="/login">Login</WhiteLink>
      )}
    </Wrapper>
  );
};

export const LogoutButton = ({onLogout}) => (
  <button onClick={onLogout}>Logout</button>
)
LogoutButton.displayName = "LogoutButton";

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  authentication: PropTypes.object,
  podcastState: PropTypes.string
}

export default Header;
