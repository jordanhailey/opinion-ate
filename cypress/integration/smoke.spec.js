describe('Smoke Test', function smokeTest() {
  it('Can view the homepage', function testViewHomepage() {
    cy.visit('/');
    cy.contains('Learn React');
  });
});
