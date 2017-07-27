/* global it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { initialState } from './reducers';

it('App renders without crashing', () => {
  const mockFuction = jest.fn();

  const component = shallow(
    <App
      state={initialState}
      submitTodo={mockFuction}
      undeleteTodo={mockFuction}
      todos={[]}
    />,
  );

  expect(component.exists()).toEqual(true);
});
