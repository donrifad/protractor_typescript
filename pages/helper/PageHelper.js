"use strict";
/**
 * Page helper for general utility
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@angular/common");
const protractor_1 = require("protractor");
const WaitHelper_1 = require("./WaitHelper");
class PageHelper {
    static get isFullScreen() {
        const fullScreenScript = 'if (!window.screenTop && !window.screenY){return true;}'
            + 'else{return false;}';
        return protractor_1.browser.executeScript(fullScreenScript);
    }
    static actionKeyDown(key) {
        return protractor_1.browser.actions().keyDown(key).perform();
    }
    static executeInIframe(index, fn) {
        protractor_1.browser.switchTo().frame(index);
        fn();
        protractor_1.browser.switchTo().defaultContent();
        protractor_1.browser.waitForAngular();
    }
    static actionSendKeys(key) {
        return protractor_1.browser.actions().sendKeys(key).perform();
    }
    static sendKeysToInputField(elem, key) {
        elem.sendKeys(key);
    }
    static actionKeyUp(key) {
        return protractor_1.browser.actions().keyUp(key).perform();
    }
    static keyPressForBrowser(key) {
        return protractor_1.browser.actions().sendKeys(key).perform();
    }
    static actionMouseUp(location) {
        return protractor_1.browser.actions().mouseUp(location).perform();
    }
    static actionHoverOver(elem) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.actions().mouseMove(elem).perform();
        });
    }
    // Known issue for chrome, direct maximize window doesn't work
    /**
     * To maximize the browser window
     */
    static maximizeWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            class Size {
            }
            const windowSize = yield this.executeScript(function () {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight
                };
            });
            const result = windowSize;
            return this.setWindowSize(result.width, result.height);
        });
    }
    /**
     * Sets window size
     * @param {number} width
     * @param {number} height
     */
    static setWindowSize(width, height) {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.driver
                .manage()
                .window()
                .setSize(width, height);
        });
    }
    /**
     * Wrapper for executing javascript code
     * @param {string | Function} script
     * @param varAargs
     * @returns {promise.Promise<any>}
     */
    static executeScript(script, ...varAargs) {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.driver.executeScript(script, varAargs);
        });
    }
    static convertToLowerCaseAndSortListDescending(list) {
        this.covertListToLowerCase(list);
        list.sort().reverse();
        return list;
    }
    static convertToLowerCaseAndSortListAsending(list) {
        this.covertListToLowerCase(list);
        list.sort();
        return list;
    }
    static covertListToLowerCase(list) {
        for (let i = 0; i < list.length; i++) {
            list[i] = list[i].toLowerCase();
        }
    }
    /**
     * Wrapper to return an active element
     * @returns {WebElementPromise}
     public static async getFocusedElement() {
    return browser.driver.switchTo().activeElement()
  } */
    /**
     * Switch to a new tab if browser has availability
     * @returns {PromiseLike<boolean> | Promise<boolean> | Q.Promise<any> | promise.Promise<any> | Q.IPromise<any>}
     */
    static switchToNewTabIfAvailable(windowNumber = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const handles = yield protractor_1.browser.getAllWindowHandles();
            const newWindowHandle = handles[windowNumber]; // this is your new window
            if (newWindowHandle) {
                yield protractor_1.browser.switchTo().window(newWindowHandle);
            }
            const url = yield protractor_1.browser.getCurrentUrl();
            // Avoiding bootstraping issue, Known issue
            // Error: Error while waiting for Protractor to sync with the page:
            // "window.angular is undefined. This could be either because this is a non-angular page or
            // because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.
            // See http://git.io/v4gXM for details
            return protractor_1.browser.driver.get(url);
        });
    }
    static switchToNewTab(windowNumber = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const handles = yield protractor_1.browser.getAllWindowHandles();
            const newWindowHandle = handles[windowNumber]; // this is your new window
            if (newWindowHandle) {
                yield protractor_1.browser.switchTo().window(newWindowHandle);
            }
        });
    }
    static switchToFirstTab() {
        return __awaiter(this, void 0, void 0, function* () {
            const handles = yield protractor_1.browser.getAllWindowHandles();
            yield protractor_1.browser.driver.close();
            yield protractor_1.browser.switchTo().window(handles[0]);
        });
    }
    /**
     * Click on element
     * @param {ElementFinder} targetElement
     * @returns {any}
     */
    static click(targetElement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield WaitHelper_1.WaitHelper.getInstance().waitForElementToBeClickable(targetElement);
            return targetElement.click();
        });
    }
    /**
     * Click on the element and wait for it to get hidden
     * @param {ElementFinder} targetElement
     * @returns {PromiseLike<boolean> | Promise<boolean> | Q.Promise<any> | promise.Promise<any> | Q.IPromise<any>}
     */
    static clickAndWaitForElementToHide(targetElement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield WaitHelper_1.WaitHelper.getInstance().waitForElementToBeClickable(targetElement);
            yield targetElement.click();
            return WaitHelper_1.WaitHelper.getInstance().waitForElementToBeHidden(targetElement);
        });
    }
    /**
     * Gets promise for current url
     * @returns {any}
     */
    static currentUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.getCurrentUrl();
        });
    }
    static switchToframe(frameEle) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.driver.switchTo().frame(frameEle);
        });
    }
    /**
     * Verify whether element is displayed on page or not
     * @param {ElementFinder} targetElement
     * @param toWait
     * @param {boolean} toWait
     * @returns {Promise<any>}
     */
    static isElementDisplayed(targetElement, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (toWait) {
                yield WaitHelper_1.WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement);
            }
            return targetElement.isDisplayed();
        });
    }
    static isElementSelected(targetElement, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (toWait) {
                yield WaitHelper_1.WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement);
            }
            return yield targetElement.isSelected();
        });
    }
    static isElementEnabled(targetElement, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (toWait) {
                yield WaitHelper_1.WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement);
            }
            return yield targetElement.isEnabled();
        });
    }
    static scrollToElement(elementt) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.executeScript('arguments[0].scrollIntoView();', elementt.getWebElement());
        });
    }
    static getAttributeValue(elem, attribute) {
        return __awaiter(this, void 0, void 0, function* () {
            yield WaitHelper_1.WaitHelper.getInstance().waitForElementToBeDisplayed(elem);
            const value = yield elem.getAttribute(attribute);
            return value.trim();
        });
    }
    static getText(elem) {
        return __awaiter(this, void 0, void 0, function* () {
            yield WaitHelper_1.WaitHelper.getInstance().waitForElementToBeDisplayed(elem);
            const text = yield elem.getText();
            return text.trim();
        });
    }
    /**
     * Refresh a page
     *
     */
    static refreshPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.refresh();
        });
    }
    static pageLoaded() {
        return protractor_1.browser.waitForAngular();
    }
    static getMaximizeWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.driver.manage().window().maximize();
        });
    }
    static getPageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    /**
     * Click on element if displayed
     * @param {ElementFinder} targetElement
     * @returns {any}
     */
    static clickIfDisplayed(targetElement) {
        return __awaiter(this, void 0, void 0, function* () {
            const isPresent = yield targetElement.isPresent();
            if (isPresent === true) {
                const isDisplayed = yield targetElement.isDisplayed();
                if (isDisplayed === true) {
                    yield PageHelper.click(targetElement);
                }
            }
        });
    }
    static clickAllElements(targetElements) {
        return __awaiter(this, void 0, void 0, function* () {
            targetElements.each(function (elem) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield elem.click();
                });
            });
        });
    }
    /**
     * Gets innertext for all the elements
     * @param {WebElementPromise} elements
     * @returns {string} inner text
     */
    static getAllTexts(elements) {
        return __awaiter(this, void 0, void 0, function* () {
            const allTexts = new Array();
            const allItems = yield elements.asElementFinders_();
            for (const elem of allItems) {
                const elementText = yield PageHelper.getText(elem);
                allTexts.push(elementText);
            }
            return allTexts;
        });
    }
    static switchToiFrame(frameOrIframeElement, sleepTime = PageHelper.timeout.xs) {
        return __awaiter(this, void 0, void 0, function* () {
            // Wait is needed to load the iframe properly
            yield WaitHelper_1.WaitHelper.getInstance().waitForElementToBeDisplayed(frameOrIframeElement);
            yield protractor_1.browser.sleep(sleepTime);
            return yield protractor_1.browser.switchTo().frame(frameOrIframeElement.getWebElement());
        });
    }
    static switchToDefaultContent() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().defaultContent();
        });
    }
    static acceptAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.switchTo().alert().accept();
        });
    }
    static closeAlertIfPresent() {
        try {
            protractor_1.browser.sleep(PageHelper.timeout.xs);
            protractor_1.browser.switchTo().alert().accept().then(null, function () {
                protractor_1.browser.sleep(PageHelper.timeout.xs);
            });
        }
        catch (e) {
        }
    }
    static compareTwoArrays(firstArray, secondArray) {
        let flag = true;
        for (let i = 0; i < firstArray.length; i++) {
            if (firstArray[i] !== secondArray[i]) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    static sortStringArrayInDescendingOrder(list) {
        return list.sort(function (a, b) {
            if (a > b) {
                return -1;
            }
            else if (a < b) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    static isElementPresent(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            return locator.isPresent();
        });
    }
    /**
     * Verify whether element is present and displayed on page or not
     * @param {ElementFinder} targetElement
     * @returns {Promise<boolean>}
     */
    static isElementPresentAndDisplayed(targetElement, toWait = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const isPresent = yield targetElement.isPresent();
            if (isPresent === true) {
                return yield PageHelper.isElementDisplayed(targetElement, toWait);
            }
            else {
                return isPresent;
            }
        });
    }
    static clickUsingJs(targetElement, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (toWait) {
                yield WaitHelper_1.WaitHelper.getInstance().waitForElementToBeClickable(targetElement);
            }
            return yield protractor_1.browser.executeScript('arguments[0].click();', targetElement.getWebElement());
        });
    }
    static sleepForTwoSeconds() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(this.timeout.xs);
        });
    }
    static getAlertText() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.switchTo().alert().getText();
        });
    }
    static dismissAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.switchTo().alert().dismiss();
        });
    }
    static sleepForMiliSeconds(millisec = PageHelper.timeout.s) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(millisec);
        });
    }
    static getMonth(monthDiff) {
        const date = new Date();
        return date.getMonth() + monthDiff;
    }
    static dragAndDrop(elem, xx, yy) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().dragAndDrop(elem, { x: xx, y: yy }).perform();
        });
    }
    static clickUsingJsNoWait(targetElement) {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.executeScript('arguments[0].click();', targetElement);
        });
    }
    static generateRandomNo(max, min) {
        return Math.floor(Math.random() * Math.floor(max)) + min;
    }
    static getDiffMonth(date, diff, format = 'MMM yyyy') {
        const today = new Date(date);
        today.setMonth(today.getMonth() + diff);
        const datePipe = new common_1.DatePipe('en-US');
        return datePipe.transform(today, format);
    }
}
PageHelper.MAX_RETRY_ATTEMPTS = 3;
// noinspection JSValidateJSDoc
/**
 * Timeout collection to meet various needs
 * @type {{xs: number; s: number; m: number; l: number; xl: number; xxl: number; xxxl: number}}
 */
PageHelper.timeout = {
    xxs: 1000,
    xs: 2000,
    s: 5000,
    m: 10000,
    l: 25000,
    xl: 50000,
    xxl: 75000,
    xxxl: 200000
};
PageHelper.DEFAULT_TIMEOUT = PageHelper.timeout.xxl;
exports.PageHelper = PageHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZUhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBhZ2VIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7Ozs7Ozs7O0FBRUgsNENBQXlDO0FBQ3pDLDJDQUFrRjtBQUNsRiw2Q0FBd0M7QUFFeEM7SUFtQkksTUFBTSxLQUFLLFlBQVk7UUFDbkIsTUFBTSxnQkFBZ0IsR0FBRyx5REFBeUQ7Y0FDNUUscUJBQXFCLENBQUM7UUFDNUIsTUFBTSxDQUFDLG9CQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBVztRQUM1QixNQUFNLENBQUMsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBMEIsRUFBRSxFQUFZO1FBQzNELG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsRUFBRSxDQUFDO1FBQ0wsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQVc7UUFDN0IsTUFBTSxDQUFDLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBbUIsRUFBRSxHQUFXO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBVztRQUMxQixNQUFNLENBQUMsb0JB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