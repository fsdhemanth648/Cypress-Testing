export class LoginPage {

    login_textBox_username = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_textBox_password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'

    enterUsername(username) {
        cy.get(this.login_textBox_username).type(username)
    }

    enterPassword(password) {
        cy.get(this.login_textBox_password).type(password)
    }

    clickLogin() {
        cy.get(this.login_button).click()
    }
}