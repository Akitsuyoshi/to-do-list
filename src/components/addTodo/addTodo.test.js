/* global describe, it, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

const expect = require('chai').expect;


describe('AddTodo component', () => {
  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(<AddTodo submitTodo={submitMock} />);
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
  });
  it('Should call the submitTodo function when clicked', () => {
    component = mount(<AddTodo submitTodo={submitMock} />);

    expect(submitMock.mock.calls.length).to.equal(0);
    component.find('form').simulate('submit');
    expect(submitMock.mock.calls.length).to.equal(1);
  });
});
