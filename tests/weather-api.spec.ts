import { test, expect } from '@playwright/test';

test('GET /weather returns weather data for a valid city', async ({ request }) => {
  const response = await request.get('https://weatherapi-66d1cf92bdcd.herokuapp.com/weather?city=Jacksonville');

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(data).toHaveProperty('location');
  expect(data).toHaveProperty('current');
  expect(data.location.name).toMatch(/Jacksonville/i);
});

test('GET /weather without city param returns 400', async ({ request }) => {
  const response = await request.get('https://weatherapi-66d1cf92bdcd.herokuapp.com/weather');
  expect(response.status()).toBe(400);
});

test('GET /weather with invalid city returns error', async ({ request }) => {
  const response = await request.get('https://weatherapi-66d1cf92bdcd.herokuapp.com/weather?city=asdfasdfasdf');
  expect(response.status()).toBe(500);
});