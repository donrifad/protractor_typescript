import {Page} from './Page';
import {browser} from 'protractor';
import {PageHelper} from './PageHelper';

export class BasePage {

    static async get(url: string) {
        await browser.waitForAngularEnabled(true);
        await PageHelper.maximizeWindow();
        return browser.get(url, PageHelper.DEFAULT_TIMEOUT);
    }

    goTo(): void {
        throw new Error('Method not implemented.');
    }

    verifyExistence() {
        throw new Error('Method not implemented.');
    }
}
