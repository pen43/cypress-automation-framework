/// <reference types="Cypress" />

describe("Traversing DOM elements in Cypress", () => 
{
  beforeEach(() => 
  {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it("children() to get the children of DOM elements", () => 
    {
      cy.get('.breadcrumb').children('.active').should('contain', 'Contact Us');
    });
  
    it("closest() to validate the closest ancestor DOM element", () => 
    {
      cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group');
    });
  
    it("eq() to retrieve a specific element based on index", () => 
    {
      cy.get('element').eq(0);
    });
  
    it("filter() to retrieve DOM elements that match a specific selector", () => {
      cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1'); // finds an element with class active in a list
    });
  
    it("find() to retrieve DOM elements of a given selector", () => {
      cy.get('.traversal-pagination').find('li').find('a').should('have.length', '7');
    });
  
    it("first() to retrieve the first DOM element within elements ", () => {
      cy.get('element').first();
    });
  
    it("last() to retrieve the last DOM element within elements", () => {
      cy.get('element').last();
    });
  
    it("nextAll() to get all of the next sibling DOM elements within elements", () => {
      cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', 3); // all siblings next to an element
    });
  
    it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
      cy.get('#coffee').nextUntil('#espresso').should('have.length', 2); // from an element to the selected element
    });
  
    it("not() to remove DOM element(s) from the set of elements", () => {
      cy.xpath("//div[@class='traversal-button-states']/child::button").as('buttons');
      cy.get('@buttons').not('.disabled').should('not.have.class', 'disabled'); // opposite of filter
      // get buttons and delete a specified element(s) 
    });
  
    it("parent() To get parent DOM element of elements", () => {
      cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ');
    });
  
    it("parents() to get parents DOM element of elements", () => {
      cy.get('.traversal-cite').parents().should('match', 'blockquote');
    });
  
    it("prev() to get the previous sibling DOM element within elements", () => {
      cy.get('#sugar').prev().should('contain.text', 'Espresso'); // Gets the previous sibling
    });
  
    it("prevAll() to get all previous sibling DOM elements within elements", () => {
      cy.get('#sugar').prevAll().should('have.length', 4); // All previous siblings
    });
  
    it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
      cy.get('#sugar').prevUntil('#coffee'); // Gets all the elements from sugar to coffee
    });
  
    it.only("siblings() To get all sibling DOM elements of elements", () => {
      cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3); // Gets all sibling elements
    });
});
  