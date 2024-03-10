///<reference types = "Cypress" />

import HomePage_PO from "../../support/pageObjects/webdriveruni/HomePage_PO"

describe('Practice', () => 
{
    before(() => 
    {
        cy.fixture('example').then((data) => 
        {
            globalThis.data = data;
        })
    })

    beforeEach(() => 
    {
        cy.visit('/');
    })

    it.skip('data table - calculate and assert the total age of all users', () => 
    {
        let userDetails = [];
        let totalAge = 0;

        // get the users name last name and age
        cy.get().each(($el, index, $list) => 
        {
            userDetails[index];
        }).then(() => 
        {
            for(let i = 0; i < userDetails.length; i++)
            {
                if(Number(userDetails[i]))
                {
                    totalAge += Number(userDetails[i]);
                }
            }
        })
    })


    it.skip('Data picker', () => 
    {
        let data = new Date();
        data.setDate(data.getDate() + 65);
        let futureYear = data.getFullYear();
        let futureMonth = data.toLocaleString("default", {month: "long"});
        let futureDay = data.getDate();

        // click the data picker

        function selectMonthAndYear() 
        {
            cy.get('').then((currentDate) => // get the year and month selector
            {
                if(!currentDate.text().includes(futureYear))
                {
                    // click next
                    selectMonthAndYear();
                }
            }) // same thing for month
        }

        function selectDay()
        {
            cy.get().contains(futureDay).click();
        }
    })

    it.skip('js-alerts', () => 
    {
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true});

        const stub = cy.stub();

        cy.on('window:confirm', stub);

        cy.get('#button4').click().then(() => 
        {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');
        })
        .then(() => 
        {
            return true;
        })
    })

    it.skip('iframes', () => 
    {
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true});

        cy.get('#frame').then((iframe) => 
        {
            const body = iframe.contents().find('body');
            cy.wrap(body).as('iframe');
        })
    })

    it.skip('get normal and sale prices', () => 
    {
        cy.get('.oneprice').as('normalPrice');
        cy.get('@normalPrice').then(($el) => 
        {
            let totalNormalPrice = 0;
            let normalPrice = $el.text().split('$');

            for(let i = 0; i < normalPrice.length; i++)
            {
                totalNormalPrice += Number(normalPrice[i]);
            }
            cy.log(totalNormalPrice);
        })
    })
    

})