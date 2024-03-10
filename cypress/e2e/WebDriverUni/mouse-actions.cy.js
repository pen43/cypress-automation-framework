/// <reference types = "Cypress" />

describe('Test mouse actions', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://webdriveruniversity.com/");
    })

    it('Scroll over an element', () => 
    {
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true}); // Scrolls to the element

    })

    it('Drag and drop a target', () => 
    {
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true}); // Scrolls to the element
        cy.get('#draggable').trigger('mousedown', {which: 1}); // Drag
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true}); // Drop

        // double click
        // cy.get('').dblclick();
    })

    it.only('clickbox', () => 
    {
        cy.get('#actions').invoke('removeAttr', 'target').click({force:true});
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($el) => 
        {

            expect($el).to.have.css('background-color', 'rgb(0, 255, 0)'); // check the css color while clicking
        })
    })
})