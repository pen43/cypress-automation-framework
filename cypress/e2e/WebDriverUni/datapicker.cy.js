d/// <reference types = "Cypress" />

describe('Test datapicker via webdriveruni', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force: true});
    });

    it.skip('test date', () => 
    {
        let date = new Date();
        date.setDate(date.getDate()); // Sets the date to the current day
        cy.log(date.getDate());

        let date1 = new Date();
        date1.setDate(date.getDate() + 5); // get current date + 5
        cy.log(date1.getDate());
    });

    it('Select data from the datapicker', () => 
    {
        let date = new Date();
        date.setDate(date.getDate() + 65);

        let futureYear = date.getFullYear();
        let futureMonth = date.toLocaleString("default", {month: 'long'});
        let futureDay = date.getDate();

        cy.log('Future Year: ' + futureYear);
        cy.log("Future Month: " + futureMonth);
        cy.log("Future Day: " + futureDay);

        cy.xpath("//div[@id='datepicker']").click();

        function selectMonthandYear() 
        {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').then ((currentDate) => 
            {
                if(!currentDate.text().includes(futureYear)) // If the current year does not equal futureYear 
                {
                    cy.get('.next').first().click(); // Click next
                    selectMonthandYear();
                }
            }).then((currentDate) => 
            {
                if(!currentDate.text().includes(futureMonth))
                {
                    cy.get('.next').first().click(); 
                    selectMonthandYear();
                }
            })
        }

        function selectDay () 
        {
            cy.get("td[class='day']").contains(futureDay).click();
        }

        selectMonthandYear();
        selectDay();
    })
});