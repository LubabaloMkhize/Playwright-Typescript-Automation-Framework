// components/table.component.ts

import { Page, Locator, expect } from '@playwright/test';

export class NavbarComponent {
  private readonly page: Page;

  readonly logo: Locator;

  constructor(page: Page) {
    this.page = page;

    // BEST locator for your HTML
    this.logo = page.getByAltText('NTA Logo');
  }

  async clickLogo() {
    await this.logo.click();
  }

  async expectLogoVisible() {
    await expect(this.logo).toBeVisible();
  }
}