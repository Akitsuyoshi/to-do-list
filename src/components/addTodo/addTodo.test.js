/* global describe, it, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

const expect = require('chai').expect;


describe('AddTodo component', () => {
  let component;
  const submitMock = jest.fn();
  const undelMock  = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo
        submitTodo={submitMock}
        undeleteTodo={undelMock}
      />,
    );
  });

  it('should render successfully', () => {
    expect(component.exists()).to.equal(true);
  });

  it('should have one input', () => {
    expect((component.find('.todo-input').length)).to.equal(1);
  });

  describe('Add todo button', () => {
    it('Should exist', () => {
      expect(component.find('.todo-submit').length).to.equal(1);
    });
    it('Should call the submitTodo function when clicked', () => {
      component = mount(
        <AddTodo
          submitTodo={submitMock}
          undeleteTodo={undelMock}
        />);

      expect(submitMock.mock.calls.length).to.equal(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).to.equal(1);
    });
  });

  describe('Add undelete button', () => {
    it('Should exist undelete button', () => {
      expect(component.find('.todo-undelete').length).to.equal(1);
    });
    it('should call the undeleteTodo function when undelete button is clicked', () => {
      component = mount(
        <AddTodo
          submitTodo={submitMock}
          undeleteTodo={undelMock}
        />);

      expect(undelMock.mock.calls.length).to.equal(0);
      component.find('.todo-undelete').simulate('click');
      expect(undelMock.mock.calls.length).to.equal(1);
    });
  });
});
