/**
 * Page helper for general utility
 */

import {DatePipe} from '@angular/common';
import {browser, ElementArrayFinder, ElementFinder, WebElement} from 'protractor';
import {WaitHelper} from './WaitHelper';

export class PageHelper {
    static MAX_RETRY_ATTEMPTS = 3;

    public static timeout = {
        xxs: 1000,
        xs: 2000,
        s: 5000,
        m: 10000,
        l: 25000,
        xl: 50000,
        xxl: 75000,
        xxxl: 200000
    };

    static DEFAULT_TIMEOUT = PageHelper.timeout.xxl;

    public static async maximizeWindow() {
        class Size {
            width: number;
            height: number;
        }

        const windowSize = await this.executeScript(function () {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight
            };
        });

        const result = windowSize as Size;

        return this.setWindowSize(result.width, result.height);
    }

    /**
     * Sets window size
     * @param {number} width
     * @param {number} height
     */
    public static async setWindowSize(width: number, height: number) {
        return browser.driver
            .manage()
            .window()
            .setSize(width, height);
    }

    public static async executeScript(script: string | Function, ...varAargs: any[]) {
        return browser.driver.executeScript(script, varAargs);
    }

    public static async click(targetElement: ElementFinder) {

        await WaitHelper.getInstance().waitForElementToBeClickable(targetElement);

        return targetElement.click();
    }

    public static async isElementDisplayed(targetElement: ElementFinder, toWait = true) {
        if (toWait) {
            await WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement);
        }
        return targetElement.isDisplayed();
    }

    static async getText(elem: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(elem);
        const text = await elem.getText();
        return text.trim();
    }

    /**
     * Refresh a page
     *
     */
    public static async refreshPage() {
        await browser.refresh();
    }

    static pageLoaded() {
        return browser.waitForAngular();
    }

    public static async getMaximizeWindow() {
        await browser.driver.manage().window().maximize();
    }

    public static async getPageTitle() {
        return await browser.getTitle();
    }

    static async getAlertText() {
        return await browser.switchTo().alert().getText();
    }

    static async dismissAlert() {
        return await browser.switchTo().alert().dismiss();
    }

    static get isFullScreen() {
        const fullScreenScript = 'if (!window.screenTop && !window.screenY){return true;}'
            + 'else{return false;}';
        return browser.executeScript(fullScreenScript);
    }

    static actionKeyDown(key: string) {
        return browser.actions().keyDown(key).perform();
    }
}
