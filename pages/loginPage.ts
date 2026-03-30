// pages/loginPage.ts
import { Page, expect } from '@playwright/test';


export class LoginPage {
    
    constructor(private page: Page) {}

    // Locators
    emailInput = this.page.locator('#login-email');
    passwordInput = this.page.locator('#login-password');
    loginSubmitButton = this.page.locator('#login-submit');
    loginButton = this.page.getByRole('button', { name: 'Login' });
    homePageHeading = this.page.getByRole('heading', { name: /Welcome back/ });
    signUpLink = this.page.locator('#signup-toggle')

    // Actions
    
    async clickLogin() {
       // await waitAndClick(this.loginButton);

        await this.loginButton.click();
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string){
        await this.passwordInput.fill(password);
    }

    async clickLoginSubmitButton(){
       
        await this.loginSubmitButton.click();
    }

    async verifyPageHeading(){
        await expect(this.homePageHeading).toBeVisible();
    }

    async clickSignUpLink(){
        //await waitAndClick(this.signUpLink);
        await this.signUpLink.click();
    }
}