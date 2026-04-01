# Playwright TypeScript Automation Framework

A modular Playwright automation framework built with TypeScript, Page Object Model, reusable fixtures, and Allure reporting.

## 🚀 Overview

This framework is designed for browser automation using Playwright and TypeScript. It provides a structured test architecture with:

- `@playwright/test` for test execution and assertions
- Page Object Model (POM) in `pages/`
- Shared fixtures in `fixtures/`
- Centralized test data in `test-data/`
- Allure reporting and HTML reports
- Multi-browser support: Chromium, Firefox, and WebKit

## 📁 Project Structure

- `tests/` - test suites organized by type
  - `regression/`
  - `sanity/`
  - `smoke/`
- `pages/` - page object classes and UI actions
- `fixtures/` - custom Playwright fixtures and hooks
- `test-data/` - static data used by tests
- `helpers/` - general helper functions
- `utils/` - utility modules
- `constants/` - reusable constants
- `api/` - API test helpers or service methods
- `allure-results/` - generated Allure result files
- `playwright-report/` - Playwright HTML report output

## ⚙️ Prerequisites

- Node.js 18+ (recommended)
- npm
- Internet access for browser downloads and the target base URL

## 📦 Installation

```bash
cd d:/Automation/Support/Playwright-Typescript-Automation-Framework
npm install
```

If this is the first time running Playwright in this workspace, you may also need to install browsers:

```bash
npx playwright install
```

## 🧪 Running Tests

Run all tests:

```bash
npx playwright test
```

Run a single suite or test file:

```bash
npx playwright test tests/sanity/login.spec.ts
```

Run tests in headed mode for debugging:

```bash
npx playwright test --headed
```

Run tests with a specific project:

```bash
npx playwright test --project=firefox
```

## 📌 Reporting

### Playwright HTML Report

After execution, open the HTML report with:

```bash
npx playwright show-report
```

### Allure Reporting

Generate the Allure report from `allure-results/`:

```bash
npx allure generate allure-results --clean -o allure-report
```

Open the generated report:

```bash
npx allure open allure-report
```

## 🧩 Key Framework Conventions

### Playwright Configuration

The configuration is defined in `playwright.config.ts`.

- `testDir: './tests'`
- `fullyParallel: true`
- `retries: process.env.CI ? 2 : 0`
- `reporter: ['html', 'list', ['allure-playwright', { outputFolder: 'allure-results' }]]`
- `baseURL: 'https://ndosisimplifiedautomation.vercel.app/'`
- `trace: 'on-first-retry'`
- configured projects for `chromium`, `firefox`, and `webkit`

### Page Object Model

Page objects are stored in `pages/` and encapsulate selectors and actions.

Example page objects:

- `pages/loginPage.ts`
- `pages/signUpPage.ts`

### Fixtures

Custom fixtures are defined in `fixtures/base.fixture.ts` and expose reusable objects such as:

- `loginPage`
- `signUpPage`

This fixture file also attaches screenshots and metadata to Allure when a test fails.

### Test Data

Static data is stored in `test-data/`, such as `usersData.ts`.

Example:

```ts
export const users = {
  validUser: { email: 'Tatalo.Mkhize@example.com', password: 'England@123456' },
  invalidUser: { email: 'Tatalo@example.com', password: 'England@123456' }
};
```

## ✍️ Example Test Flow

A typical test uses the custom fixtures and page objects:

1. Open the page with `page.goto('/')`
2. Use `loginPage.clickLogin()` to navigate to login
3. Fill credentials and submit
4. Verify page heading and attach screenshots with Allure

## 🛠️ Extending the Framework

### Add a new page object

1. Create a new file under `pages/`.
2. Define locators and actions inside a class.
3. Add a fixture in `fixtures/base.fixture.ts` if you want dependency injection.
4. Use the new fixture in test files.

### Add a new test suite

1. Create a new `.spec.ts` file under `tests/`.
2. Import `test` from `fixtures/base.fixture`.
3. Use existing page object fixtures and data.

## 💡 Notes

- The base URL is configured inside `playwright.config.ts`.
- Environment loading via `.env` is available but currently commented out in `playwright.config.ts`.
- Allure attachments are added for screenshots and failure diagnostics.

## 🔧 Recommended npm Scripts

Optionally add these scripts to `package.json` for convenience:

```json
"scripts": {
  "test": "npx playwright test",
  "test:headed": "npx playwright test --headed",
  "report": "npx playwright show-report",
  "allure:generate": "npx allure generate allure-results --clean -o allure-report",
  "allure:open": "npx allure open allure-report"
}
```

## 📣 Final Tip

Keep page actions small and reusable, store stable selectors in page objects, and use fixture-based dependency injection for cleaner test code.
