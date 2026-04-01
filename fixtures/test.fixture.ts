// fixtures/test.fixture.ts
import { test as base } from './base.fixture';
import { LoginApi } from '../api/Auth/login.api';
import { TestimonialsApi } from '../api/Testimonials/testimonials.api';
import { NavbarComponent } from '../components/navbar.component';

type ExtendedFixtures = {
  loginApi: LoginApi;
  testimonialsApi: TestimonialsApi;
  navbar: NavbarComponent;
};

export const test = base.extend<ExtendedFixtures>({
  // API
  loginApi: async ({ request }, use) => {
    await use(new LoginApi(request));
  },

  testimonialsApi: async ({ request }, use) => {
    await use(new TestimonialsApi(request));
  },

  // UI Component
  navbar: async ({ page }, use) => {
    await use(new NavbarComponent(page));
  }
});

export { expect } from '@playwright/test';