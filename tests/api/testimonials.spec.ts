// tests/api/testimonials.spec.ts
import { test, expect } from '@playwright/test';
import { TestimonialsApi } from '../../api/Testimonials/testimonials.api';

test('get testimonials should succeed', async ({ request }) => {
  const testimonialsApi = new TestimonialsApi(request);

  const response = await testimonialsApi.getTestimonials(50, 0);

  // Status check
  expect(response.status()).toBe(200);

  const body = await response.json();

  // Basic response checks
  expect(body.success).toBe(true);
  expect(body.message).toBe('Testimonials retrieved successfully');

  // Data checks
  expect(body.data).toBeTruthy();
  expect(Array.isArray(body.data.testimonials)).toBe(true);

  // Validate at least one testimonial
  if (body.data.testimonials.length > 0) {
    const testimonial = body.data.testimonials[0];

    expect(testimonial.Id).toBeTruthy();
    expect(testimonial.Title).toBeTruthy();
    expect(testimonial.Content).toBeTruthy();
    expect(typeof testimonial.Rating).toBe('number');
    expect(testimonial.FirstName).toBeTruthy();
    expect(testimonial.LastName).toBeTruthy();
  }

  // Pagination checks
  expect(body.data.pagination).toBeTruthy();
  expect(typeof body.data.pagination.total).toBe('number');
  expect(typeof body.data.pagination.limit).toBe('number');
  expect(typeof body.data.pagination.offset).toBe('number');
  expect(typeof body.data.pagination.hasMore).toBe('boolean');
});