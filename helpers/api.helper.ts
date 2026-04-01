// helpers/api.helper.ts
import { APIResponse } from '@playwright/test';
import { LoginApi } from '../api/Auth/login.api';

export class ApiHelper {
  static getHeaders(token?: string) {
    return {
      accept: '*/*',
      ...(token && { Authorization: `Bearer ${token}` })
    };
  }

  static async getAuthToken(loginApi: LoginApi): Promise<string> {
    const response = await loginApi.login(
      'Tatalo.Mkhize@example.com',
      'England@123456'
    );

    const body = await response.json();
    return body.data.token;
  }

  static async validateSuccess(response: APIResponse) {
    if (response.status() !== 200) {
      throw new Error(`Expected 200 but got ${response.status()}`);
    }

    const body = await response.json();

    if (!body.success) {
      throw new Error(`API failed: ${body.message}`);
    }

    return body;
  }
}