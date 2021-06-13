describe("Form", () => {
  it("When we visiting the home page, its visible", () => {
    cy.visit("http://localhost:9000/");
    cy.get("[data-hook=mainForm]").should("be.visible");
  });

  it("When typing city autocomplete working and visible", () => {
    cy.get("[data-hook=autocompleteOrigin]").as("autocompleteOrigin");
    cy.get("@autocompleteOrigin").should("be.visible");
    cy.get("@autocompleteOrigin").type("Tyumen");
    cy.get("@autocompleteOrigin").should("have.value", "Tyumen");
  });

  it("When typing destination autocomplete working and visible", () => {
    cy.get("[data-hook=autocompleteDestination]").as("autocompleteDestination");
    cy.get("@autocompleteDestination").should("be.visible");
    cy.get("@autocompleteDestination").type("Moskow");
    cy.get("@autocompleteDestination").should("have.value", "Moskow");
  });

  it("When clik on datepickerDepart it working and visible", () => {
    cy.get("[data-hook=datepickerDepart]").as("datepickerDepart");
    cy.get("[data-hook=datepickerDepartWrap] .datepicker-container").as(
      "modalDepart"
    );
    cy.get("@datepickerDepart").click();
    cy.get("@modalDepart").should("be.visible");
  });

  it("Depart date after selected visible  and working", () => {
    cy.get(
      "[data-hook=datepickerDepartWrap] .datepicker-container .is-today"
    ).as("today");
    cy.get(
      "[data-hook=datepickerDepartWrap] .datepicker-container .btn-flat"
    ).as("modalButtons");
    cy.get("[data-hook=datepickerDepart]").as("datepickerDepart");

    cy.get("@today").click();
    cy.get("@today").should("have.class", "is-selected");
    cy.get("@modalButtons").contains("Ok").click();

    cy.get("@datepickerDepart").then(($input) => {
      const val = $input.val();
      expect(val).to.match(/^\d{4}-\d{2}$/);
    });
  });

  it("When we changed currensy it visible and working", () => {
    cy.get("[data-hook=CurrencySelect] .dropdown-trigger").as(
      "currencyTrigger"
    );
    cy.get("[data-hook=CurrencySelect] .dropdown-content li").as(
      "currencyItem"
    );
    cy.get("@currencyTrigger").click();
    cy.get("@currencyItem").contains("€ Euro").click();
    cy.get("@currencyTrigger").should("have.value", "€ Euro");
  });
});
