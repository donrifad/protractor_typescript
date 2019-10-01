"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PageHelper_1 = require("./PageHelper");
const protractor_1 = require("protractor");
class WaitHelper {
    constructor() {
        this.EC = protractor_1.protractor.ExpectedConditions;
    }
    static getInstance() {
        if (!WaitHelper.instance) {
            WaitHelper.instance = new WaitHelper();
        }
        return WaitHelper.instance;
    }
    /**
     * Default timeout for promises
     * @type {number}
     */
    /**
     * Wait for an element to exist
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    waitForElement(targetElement, timeout = PageHelper_1.PageHelper.DEFAULT_TIMEOUT, message = 'Element should exist') {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.wait(this.EC.presenceOf(targetElement), timeout, targetElement.locator().toString() + message);
        });
    }
    /**
     * Wait for an element to display
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    waitForElementToBeDisplayed(targetElement, timeout = PageHelper_1.PageHelper.DEFAULT_TIMEOUT, message = 'Element should be visible') {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.wait(this.EC.visibilityOf(targetElement), timeout, targetElement.locator().toString() + message);
        });
    }
    /**
     * Wait for an element to hide
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     * @returns {any}
     */
    waitForElementToBeHidden(targetElement, timeout = PageHelper_1.PageHelper.DEFAULT_TIMEOUT, message = 'Element should not be visible') {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.wait(this.EC.invisibilityOf(targetElement), timeout, targetElement.locator().toString() + message);
        });
    }
    /**
     * Wait for an element to become clickable
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    waitForElementToBeClickable(targetElement, timeout = PageHelper_1.PageHelper.DEFAULT_TIMEOUT, message = 'Element not clickable') {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.wait(this.EC.elementToBeClickable(targetElement), timeout, targetElement.locator().toString() + message);
        });
    }
    waitForElementToResolve(promiseCall, resolver, timeout = PageHelper_1.PageHelper.DEFAULT_TIMEOUT, message = '') {
        return __awaiter(this, void 0, void 0, function* () {
            let result = false;
            return protractor_1.browser.wait(() => {
                promiseCall().then((value) => (result = resolver(value)));
                return result;
            }, timeout, message);
        });
    }
    waitForElementToHaveText(targetElement, timeout = PageHelper_1.PageHelper.DEFAULT_TIMEOUT, message = '') {
        return __awaiter(this, void 0, void 0, function* () {
            return this.waitForElementToResolve(() => targetElement.getText(), (text) => text.length > 0, timeout, message);
        });
    }
    waitForElementOptionallyPresent(targetElement, timeout = PageHelper_1.PageHelper.DEFAULT_TIMEOUT) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDisplayed = this.EC.presenceOf(targetElement);
            return protractor_1.browser.wait(isDisplayed, timeout).then(function () {
                return true;
            }, function () {
                return false;
            });
        });
    }
    /**
     * Wait till complete page loading
     */
    waitForPageToStable() {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                const result = protractor_1.browser.executeScript('return document.readyState == \'complete\'');
                if (result) {
                    return;
                }
            }
        });
    }
}
exports.WaitHelper = WaitHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FpdEhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldhaXRIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QywyQ0FBOEQ7QUFFOUQ7SUFJSTtRQUZpQixPQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztJQUdwRCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVc7UUFDZCxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUMzQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNIOzs7OztPQUtHO0lBQ1UsY0FBYyxDQUFDLGFBQTRCLEVBQzVCLE9BQU8sR0FBRyx1QkFBVSxDQUFDLGVBQWUsRUFDcEMsT0FBTyxHQUFHLHNCQUFzQjs7WUFDeEQsTUFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUNqRCxPQUFPLEVBQ1AsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUVEOzs7OztPQUtHO0lBQ1UsMkJBQTJCLENBQUMsYUFBNEIsRUFDNUIsT0FBTyxHQUFHLHVCQUFVLENBQUMsZUFBZSxFQUNwQyxPQUFPLEdBQUcsMkJBQTJCOztZQUMxRSxNQUFNLENBQUMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQ25ELE9BQU8sRUFDUCxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUFB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