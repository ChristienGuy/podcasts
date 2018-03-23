import React from "react";
import { Header } from "./Header";
import { shallow, mount } from "enzyme";

import { AuthenticationState } from "../../constants/authenticationState";
import { PodcastState } from "../../constants/podcastState";

const setup = addedProps => {
  const props = {
    logout: jest.fn(),
    authentication: {},
    podcastState: "",
    ...addedProps
  };

  const wrapper = shallow(<Header {...props} />);

  return {
    props,
    wrapper
  };
};

it("renders without crashing", () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});

it("Should render logout button when the user is logged in", () => {
  const { wrapper, props } = setup({
    authentication: { authenticationState: AuthenticationState.LOGGED_IN }
  });

  expect(wrapper.find('LogoutButton')).toBeTruthy()
  expect(wrapper).toMatchSnapshot();
});

it("should call logout when logout is clicked", () => {
  const { wrapper, props } = setup({
    authentication: { authenticationState: AuthenticationState.LOGGED_IN }
  });
  const button = wrapper.find("LogoutButton");

  button.props().onLogout();
  expect(props.logout.mock.calls.length).toBe(1);
});

it("should show 'updating podcasts' when podcastState === UPDATING", () => {
  const { wrapper, props } = setup({
    authentication: { podcastState: PodcastState.UPDATING }
  });
  
  expect(wrapper).toMatchSnapshot()
});
