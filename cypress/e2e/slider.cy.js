describe("Swiper Gallery Test", function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should("contain", "United Kingdom");
  });

  it("Properly swipes back and forth", function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-slide-active").should("contain", "Italy");
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should("contain", "United Kingdom");
    cy.wait(2000);
    cy.get(".swiper-button-prev").click();
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "Italy");
  });

  it('Checks if third slide contains "Paris"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.wait(2000);
    cy.get(".swiper-button-next").click({ force: true });
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "Paris");
  });
});
