import { getGreeting } from '../support/app.po';

describe('adjudication-portal', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to adjudication-portal!');
  });
});
