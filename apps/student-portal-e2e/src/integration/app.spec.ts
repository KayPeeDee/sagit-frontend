import { getGreeting } from '../support/app.po';

describe('student-portal', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to student-portal!');
  });
});
