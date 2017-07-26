/* global expect, it, describe */

import types from '../constants';
import { reducer, initialState } from '.';

describe('Reducer', () => {
  const todoText = 'A todo';

  it('Should return the initialState when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('submit todo', () => {
    it('Should return the correct state', () => {
      // set up the action expected to be passed to reducer
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText,
      };
      // expected state from reducer
      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('delete todo', () => {
    const staringState = {
      todos: [
        {
          id: 1,
          text: todoText,
        },
      ],
    };

    const action = {
      type: types.DELETE_TODO,
      id: 1,
    };

    const expectedState = {
      todos: [],
    };

    expect(reducer(staringState, action)).toEqual(expectedState);
  });
});
