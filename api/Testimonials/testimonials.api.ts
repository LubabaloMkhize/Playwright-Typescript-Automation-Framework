// api/Testimonials/testimonials.api.ts
import { APIRequestContext, APIResponse } from '@playwright/test';



export class TestimonialsApi {
  private readonly request: APIRequestContext;
  private readonly baseUrl = 'https://www.ndosiautomation.co.za/APIDEV';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getTestimonials(limit = 50, offset = 0): Promise<APIResponse> {
    return await this.request.get(
      `${this.baseUrl}/testimonials`,
      {
        headers: {
          accept: '*/*'
        }
      }
    );
  }
}