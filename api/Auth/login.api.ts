// api/Auth/login.api.ts
import { APIRequestContext, APIResponse } from '@playwright/test';

export class LoginApi {
  private readonly request: APIRequestContext;
  private readonly baseUrl = 'https://ndosiautomation.co.za/APIDEV';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async login(email: string, password: string): Promise<APIResponse> {
    return await this.request.post(`${this.baseUrl}/login`, {
      data: {
        email,
        password
      }
    });
  }
}
