/* global describe, it, browser */

const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.equal('Todo List');
  });

  it('should allow to create a Todo', () => {
    const todoText = 'get better at testing';
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');

    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });

  it('should allow to delete a toTo', () => {
    const todoText = 'get better at testing';
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    const actual = browser.element('.todo-text');

    expect(actual.state).to.equal('failure');
  });

  it('should allow me to undelete a toDo', () => {
    const todoText = 'get better a test';
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    browser.click('.todo-undelete');
    const actual = browser.element('.todo-text');

    expect(actual.state).to.equal('success');
  });

  // it(shou)
});
