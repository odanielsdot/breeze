// pages/ProfilePage.ts

import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../fixtures/test-data';

export class ProfilePage extends BasePage {
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        super(page);
        this.nameInput = page.locator('[name="name"]').first();
        this.emailInput = page.locator('[name="email"]').first();
        this.saveButton = page.locator('button[type="submit"], input[type="submit"]').first();
    }

    async goto(): Promise<void> { await this.navigate(ROUTES.profile); }

    async updateProfile(data: Record<string, string>): Promise<void> {
        if (data['name'] !== undefined) await this.fillName(data['name']);
        if (data['email'] !== undefined) await this.fillEmail(data['email']);
        await this.saveButton.click();
    }

    async fillName(value: string): Promise<void> { await this.nameInput.fill(value); }
    async fillEmail(value: string): Promise<void> { await this.emailInput.fill(value); }
    async assertOnProfilePage(): Promise<void> {
        await this.assertURL(new RegExp(ROUTES.profile.replace(/\//g, '\\/')));
    }
}
