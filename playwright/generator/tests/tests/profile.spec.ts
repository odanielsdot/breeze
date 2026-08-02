// tests/profile.spec.ts

import { test, expect } from '@playwright/test';
import { ProfilePage } from '../pages/ProfilePage';
import { TEST_USER } from '../fixtures/test-data';

test.describe('Profile page — Component', () => {
    let profilePage: ProfilePage;

    test.beforeEach(async ({ page }) => {
        profilePage = new ProfilePage(page);
        await profilePage.goto();
    });

    test('shows name field', async () => { await expect(profilePage.nameInput).toBeVisible(); });
    test('shows email field', async () => { await expect(profilePage.emailInput).toBeVisible(); });
    test('shows save profile button', async () => { await expect(profilePage.saveButton).toBeVisible(); });
});

test.describe('Profile page — Functionality', () => {
    let profilePage: ProfilePage;

    test.beforeEach(async ({ page }) => {
        profilePage = new ProfilePage(page);
        await profilePage.goto();
    });

    test('save button is enabled', async () => {
        await expect(profilePage.saveButton).toBeEnabled();
    });

    test('updates profile successfully', async () => {
        await profilePage.updateProfile({
            'name': TEST_USER.name + ' Updated',
            'email': TEST_USER.email,
        });
        await profilePage.assertOnProfilePage();
    });
});
