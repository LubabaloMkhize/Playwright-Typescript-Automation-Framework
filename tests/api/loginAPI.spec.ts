import { test, expect } from '@playwright/test';
import { LoginApi } from '../../api/Auth/login.api';

test('login should succeed', async ({ request }) => {
  const loginApi = new LoginApi(request);

  const response = await loginApi.login(
    'Tatalo.Mkhize@example.com',
    'England@123456'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.success).toBe(true);
  expect(body.message).toBe('Login successful');

  expect(body.data.token).toBeTruthy();
  expect(body.data.user.email).toBe('Tatalo.Mkhize@example.com');
});