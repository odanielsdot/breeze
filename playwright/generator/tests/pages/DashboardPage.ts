// pages/DashboardPage.ts

import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../fixtures/test-data';

export class DashboardPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async goto(): Promise<void> {
        await this.navigate(ROUTES.dashboard);
    }

    async assertWelcomeVisible(): Promise<void> {
        // Assert we reached the dashboard URL and there is some heading (h1, h2, h3, h4)
        await this.assertURL(new RegExp(ROUTES.dashboard.replace(/\//g, '\\/')));
        await expect(this.page.locator('h1, h2, h3, h4').first()).toBeVisible();
    }

    async assertOnDashboard(): Promise<void> {
        await this.assertURL(new RegExp(ROUTES.dashboard.replace(/\//g, '\\/')));
    }
}
