// helpers/user.helper.ts

import { Page } from '@playwright/test';
import { ROLES } from '../constants/roles';

export type Role = typeof ROLES[keyof typeof ROLES];

const credentials = {
  [ROLES.ADMIN]: {
    email: 'admin@test.com',
    password: 'password123'
  },
  [ROLES.USER]: {
    email: 'user@test.com',
    password: 'password123'
  }
};

export async function loginAs(page: Page, role: Role) {
  const user = credentials[role];

  await page.goto('/login');
  await page.fill('#email', user.email);
  await page.fill('#password', user.password);
  await page.click('button[type=submit]');
}