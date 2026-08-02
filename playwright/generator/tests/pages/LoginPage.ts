// pages/LoginPage.ts

import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../fixtures/test-data';

export class LoginPage extends BasePage {
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly rememberInput: Locator;
    readonly submitButton: Locator;
    readonly forgotPasswordLink: Locator;
    readonly registerLink: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.locator('[name="email"]').first();
        this.passwordInput = page.locator('[name="password"]').first();
        this.rememberInput = page.locator('[name="remember"]').first();
        this.submitButton = page.locator('button[type="submit"], input[type="submit"]').first();
        this.forgotPasswordLink = page.locator('a[href*="forgot-password"], a[href*="reset-password"]').first();
        this.registerLink = page.locator(`a[href*="${ROUTES.register}"]`).first();
    }

    async goto(): Promise<void> { await this.navigate(ROUTES.login); }

    async login(data: Record<string, string>): Promise<void> {
        if (data['email'] !== undefined) await this.fillEmail(data['email']);
        if (data['password'] !== undefined) await this.fillPassword(data['password']);
        if (data['remember'] !== undefined) await this.fillRemember(data['remember']);
        await this.submitButton.click();
    }

    async fillEmail(value: string): Promise<void> { await this.emailInput.fill(value); }
    async fillPassword(value: string): Promise<void> { await this.passwordInput.fill(value); }
    async fillRemember(value: string): Promise<void> {
        if (value === 'true') await this.rememberInput.check();
        else await this.rememberInput.uncheck();
    }
    async clickSubmit(): Promise<void> { await this.submitButton.click(); }

    async assertOnLoginPage(): Promise<void> {
        await this.assertURL(new RegExp(ROUTES.login.replace(/\//g, '\\/')));
        await expect(this.submitButton).toBeVisible();
    }
}
