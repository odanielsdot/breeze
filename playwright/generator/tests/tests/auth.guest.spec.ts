// tests/auth.guest.spec.ts

import { test, expect } from '@playwright/test';
import { ROUTES } from '../fixtures/test-data';

// Reset storage state for this file to avoid being logged in
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Guest Authorization', () => {
    test('redirects to login when accessing /dashboard', async ({ page }) => {
        await page.goto('/dashboard');
        await expect(page).toHaveURL(new RegExp(ROUTES.login.replace(/\//g, '\\/')));
    });

    test('redirects to login when accessing /profile', async ({ page }) => {
        await page.goto('/profile');
        await expect(page).toHaveURL(new RegExp(ROUTES.login.replace(/\//g, '\\/')));
    });

    test('redirects to login when accessing /categories', async ({ page }) => {
        await page.goto('/categories');
        await expect(page).toHaveURL(new RegExp(ROUTES.login.replace(/\//g, '\\/')));
    });

    test('redirects to login when accessing /posts', async ({ page }) => {
        await page.goto('/posts');
        await expect(page).toHaveURL(new RegExp(ROUTES.login.replace(/\//g, '\\/')));
    });
});
