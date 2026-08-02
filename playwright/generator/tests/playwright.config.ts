import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    workers: process.env.CI ? '50%' : undefined,
    reporter: [['html', { outputFolder: '../reports' }], ['json', { outputFile: '../reports/report.json' }], ['list']],

    use: {
        baseURL: process.env.APP_URL ?? 'http://127.0.0.1:8000',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        headless: true,
    },

    projects: [
        {
            name: 'setup',
            testMatch: /auth.setup.ts/,
            fullyParallel: false,
            use: { ...devices['Desktop Chrome'], storageState: undefined },
        },
        {
            name: 'auth',
            testMatch: /auth.spec.ts/,
            dependencies: ['setup'],
            use: { ...devices['Desktop Chrome'], storageState: undefined },
        },
        {
            name: 'chromium',
            testIgnore: [/auth.setup.ts/, /auth.spec.ts/],
            dependencies: ['setup'],
            use: { ...devices['Desktop Chrome'], storageState: '.auth/user.json' },
        }
    ],
});
