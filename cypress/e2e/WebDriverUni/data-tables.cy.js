/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => 
{
    beforeEach(() => 
    {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });

    it.skip("Calculate and assert the total age of all users", () => 
    {
        let userDetails = [];
        let numb = 0;

        cy.get('#thumbnail-1 td').each(($el, index, $list) => // Loop through each td element
        {
            userDetails[index] = $el.text(); // from 0,1,2,3 is assigned a text
        }).then(() => 
        {
            for(let i = 0; i < userDetails.length; i++) 
            {
                if(Number(userDetails[i]))              //only consider String's which contain integers
                {
                    numb += Number(userDetails[i])      //add numbers to let variable
                }
                //cy.log(userDetails[i])                //log details of all ages
            }
            cy.log("Found total age: " + numb)
            expect(numb).to.eq(322)                    //calculate totals and perform assertion...
        })
    });
    
    it('Calculate and assert the age of a given user based on their last name', () => 
    {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => // Loop through the lastnames
        {
            const text = $el.text();
            if(text == "Woods")
            {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(($age) => // gets the index of Woods 
                {                                                                         // And then next() moves to the next column
                    const Userage = $age.text();                                          // basically goes to the age of Woods
                    expect(Userage).to.eq("80");
                });
            }
        })
    })


  });
  