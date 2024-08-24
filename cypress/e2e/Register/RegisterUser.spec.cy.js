

describe("Register User", () => {
  beforeEach(() => {
    cy.visit('http://automationexercise.com')
  })
  context('should register a new user', () => {
    it("Register Uaer", () => {

      cy.get('a').contains(' Signup / Login').should('be.visible').click()
      cy.get('input[data-qa="signup-name"]').type('Test User')
      cy.get('input[data-qa="signup-email"]').type('EmailTestUser@mail.com')
      cy.get('button[data-qa="signup-button"]').click()
      cy.get('#id_gender1').click()
    })
  });

})