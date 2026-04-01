// fixtures/auth.fixture.ts

import { test as base } from '@playwright/test';
import { ROLES } from '../constants/roles';

const storageStates = {
  [ROLES.ADMIN]: 'storage/admin.json',
  [ROLES.USER]: 'storage/user.json'
};

export const test = base.extend<{
  role: string;
}>({
  role: [ROLES.USER, { option: true }],

  context: async ({ browser, role }, use) => {
    const context = await browser.newContext({
      storageState: storageStates[role]
    });

    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  }
});