import React from 'react';
import { App } from './App';
import { shallow } from "enzyme";

import { AuthenticationState } from "./constants/authenticationState";

const sharedProps = {
  sessionCheckAttempt: jest.fn(),
  sessionCheckFailure: jest.fn()
}

function setup() {
  const props = {
    sessionCheckAttempt: jest.fn(),
    sessionCheckFailure: jest.fn(),
    authState: ''
  }

  const enzymeWrapper = shallow(<App {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

it('renders without crashing', () => {
  const { enzymeWrapper } = setup()
  expect(enzymeWrapper).toMatchSnapshot()
});

it("renders loading when authstate is 'CHECKING_SESSION'", () => {
  const props = {
    ...sharedProps,
    authState: AuthenticationState.CHECKING_SESSION
  }

  const wrapper = shallow(<App {...props} />)
  expect(wrapper).toMatchSnapshot()
})

it("renders correct routes when authState is 'LOGGED_IN'", () => {
  const props = {
    ...sharedProps,
    authState: AuthenticationState.LOGGED_IN
  }
  const wrapper = shallow(<App {...props} />)
  expect(wrapper).toMatchSnapshot()
})
