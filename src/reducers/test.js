/* global expect, it, describe */

import types from '../constants';
import { reducer, initialState } from '.';

describe('Reducer', () => {
  const todoText = 'A todo';

  it('Should return the initialState when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  // test for submit
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
        deleted: {},
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  // test for delete
  describe('delete todo', () => {
    const staringState = {
      todos: [
        {
          id: 1,
          text: todoText,
        },
      ],
      deleted: {},
    };

    const action = {
      type: types.DELETE_TODO,
      id: 1,
    };

    const expectedState = {
      todos: [],
      deleted: {
        id: 1,
        text: todoText,
      },
    };

    expect(reducer(staringState, action)).toEqual(expectedState);
  });

  // test for undelete
  describe('undelete todo', () => {
    const staringState = {
      todos: [],
      deleted: {
        id: 1,
        text: todoText,
      },
    };

    const action = {
      type: types.UNDELETE_TODO,
    };
    const expectedState = {
      todos: [
        {
          id: 1,
          text: todoText,
        },
      ],
      deleted: {},
    };

    expect(reducer(staringState, action)).toEqual(expectedState);
  });
});
