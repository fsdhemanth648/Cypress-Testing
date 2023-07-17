import { LoginPage } from "./pages/LoginPage"

const loginPage = new LoginPage()

beforeEach(function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('ALL login Tests', function () {

    it('Login correct credentials', function () {

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    })

    it('Login wrong username', function () {

        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    })
})
it('Login wrong password', function () {

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin1234')
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()

    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    // cy.get('.oxd-button').click()
})


