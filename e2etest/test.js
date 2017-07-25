/* global describe, it, browser */

const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).toEqual('Todo List');
  });

  it('should allow to create a Todo', () => {
    const todoText = 'get better at testing';
    browser.url('http://localhost:3000/');
    browser.click('.todo-submit');

    const actual = browser.element('.todo-text').getText();

    expect(actual).toEqual(todoText);
  });
});
