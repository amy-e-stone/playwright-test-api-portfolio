# Playwright API Test Suite – Weather API

This project is a backend-focused test suite built with [Playwright](https://playwright.dev) and JavaScript to test a live weather API. It sends HTTP requests to deployed endpoints and verifies response structure, status codes, and error handling.

Tests cover both valid and invalid input scenarios to ensure the API is reliable and production-ready.

## Features

- Functional and integration testing for RESTful API endpoints
- Uses Playwright's built-in request API (no browser required)
- Verifies response structure, status codes, and error handling
- Includes positive and negative test scenarios

---

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/amy-e-stone/playwright-test-api-portfolio.git
   cd playwright-test-api-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright (for test runner and request API)**
   ```bash
   npx playwright install
   ```
   
---

## Run tests and view reports:

- To run all tests:
  ```bash
   npx playwright test
  ```

- To run a specific test file:
  ```bash
  npx playwright test tests/<the-test-file-name>.spec.ts
  ```

- To view the last test report:
  ```bash
  npx playwright show-report
  ```

---

## Visual Trace (Optional)

1. **Open the 'playwright.config.ts' file**

2. **Temporarily set:**
   ```ts
   use: {
   trace: 'on',
   }
   ```

3. **After running the test(s):**
   ```bash
   npx playwright show-trace test-results/<folder>/trace.zip
   ```

Note: the trace folder, denoted 'folder' above, is automatically named by Playwright according to the test name.

The trace viewer will launch in your browser with step-by-step request metadata, assertions, and debugging information.

---

## Project Structure
/tests                -> API test specifications   
playwright.config.ts  -> Test configuration  
index.js              -> Express server (calls WeatherAPI)  
   







