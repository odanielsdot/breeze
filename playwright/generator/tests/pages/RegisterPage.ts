// pages/RegisterPage.ts

import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../fixtures/test-data';

export class RegisterPage extends BasePage {
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly passwordConfirmationInput: Locator;
    readonly submitButton: Locator;
    readonly loginLink: Locator;

    constructor(page: Page) {
        super(page);
        this.nameInput = page.locator('[name="name"]').first();
        this.emailInput = page.locator('[name="email"]').first();
        this.passwordInput = page.locator('[name="password"]').first();
        this.passwordConfirmationInput = page.locator('[name="password_confirmation"]').first();
        this.submitButton = page.locator('button[type="submit"], input[type="submit"]').first();
        this.loginLink = page.locator(`a[href*="${ROUTES.login}"]`).first();
    }

    async goto(): Promise<void> { await this.navigate(ROUTES.register); }

    async register(data: Record<string, string>): Promise<void> {
        if (data['name'] !== undefined) await this.fillName(data['name']);
        if (data['email'] !== undefined) await this.fillEmail(data['email']);
        if (data['password'] !== undefined) await this.fillPassword(data['password']);
        if (data['password_confirmation'] !== undefined) await this.fillPasswordConfirmation(data['password_confirmation']);
        await this.submitButton.click();
    }

    async fillName(value: string): Promise<void> { await this.nameInput.fill(value); }
    async fillEmail(value: string): Promise<void> { await this.emailInput.fill(value); }
    async fillPassword(value: string): Promise<void> { await this.passwordInput.fill(value); }
    async fillPasswordConfirmation(value: string): Promise<void> { await this.passwordConfirmationInput.fill(value); }
    async clickSubmit(): Promise<void> { await this.submitButton.click(); }

    async assertOnRegisterPage(): Promise<void> {
        await this.assertURL(new RegExp(ROUTES.register.replace(/\//g, '\\/')));
        await expect(this.submitButton).toBeVisible();
    }
}
