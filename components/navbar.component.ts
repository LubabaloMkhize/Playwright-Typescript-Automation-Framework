// components/navbar.component.ts


import { Page, Locator, expect } from '@playwright/test';

export class NavbarComponent {
  private readonly page: Page;

  // Locators
  readonly logo: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;
  readonly profileMenu: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logo = page.locator('[data-testid="navbar-logo"]');
    this.loginButton = page.locator('[data-testid="login-btn"]');
    this.logoutButton = page.locator('[data-testid="logout-btn"]');
    this.profileMenu = page.locator('[data-testid="profile-menu"]');
  }

  // Actions
  async clickLogo() {
    await this.logo.click();
  }

  async goToLogin() {
    await this.loginButton.click();
  }

  async openProfileMenu() {
    await this.profileMenu.click();
  }

  async logout() {
    await this.profileMenu.click();
    await this.logoutButton.click();
  }

  // Assertions (optional but useful)
  async expectLoggedIn() {
    await expect(this.profileMenu).toBeVisible();
  }

  async expectLoggedOut() {
    await expect(this.loginButton).toBeVisible();
  }
}


// import { Page, Locator, expect } from '@playwright/test';

// export class NavbarComponent {
//   private readonly page: Page;

//   readonly logo: Locator;

//   constructor(page: Page) {
//     this.page = page;

//     // BEST locator for your HTML
//     this.logo = page.getByAltText('NTA Logo');
//   }

//   async clickLogo() {
//     await this.logo.click();
//   }

//   async expectLogoVisible() {
//     await expect(this.logo).toBeVisible();
//   }
// }