class HomePage{
    visit(){
        cy.visit('/')
    }
    signInButton(){
        return cy.get('[href="/user/login"]')
    }
    emailField(){
        return cy.get('[type="email"]')
    }
    passwordField(){
        return cy.get('[type="password"]')
    }
    submitLoginButton(){
        return cy.get('[type="submit"]')
    }
    submitLoginForm(email, password){
        cy.log('Submit login form');

        this.emailField().type(email);
        this.passwordField().type(password);
        this.submitLoginButton().click();
    }
}
export default new HomePage();