import {PageHelper} from './PageHelper';
import {browser, ElementFinder, protractor} from 'protractor';

export class WaitHelper {
    private static instance: WaitHelper;
    private readonly EC = protractor.ExpectedConditions;

    private constructor() {
    }

    static getInstance() {
        if (!WaitHelper.instance) {
            WaitHelper.instance = new WaitHelper();
        }
        return WaitHelper.instance;
    }

    public async waitForElement(targetElement: ElementFinder,
                                timeout = PageHelper.DEFAULT_TIMEOUT,
                                message = 'Element should exist') {
        return browser.wait(this.EC.presenceOf(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }


}
