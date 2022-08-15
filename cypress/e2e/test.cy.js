it('test should pass', () => {
  cy.visit('/')
  cy.get('button.generate-btn').click()
})
