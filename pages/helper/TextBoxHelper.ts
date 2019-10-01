import {browser, ElementFinder, protractor} from 'protractor';
import {WaitHelper} from './WaitHelper';
import {PageHelper} from './PageHelper';

export class TextBoxHelper {

    public static async sendKeys(locator: ElementFinder,
                                 value: string,
                                 sendEnter = false) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(locator);
        await this.clearText(locator);

        await locator.sendKeys(value);
        if (sendEnter) {
            await locator.sendKeys(protractor.Key.ENTER);
        }
    }

    public static async clearText(locator: ElementFinder) {
        let ctrl = protractor.Key.CONTROL;

        if (browser.platform && browser.platform.indexOf('Mac')) {
            ctrl = protractor.Key.COMMAND;
        }
        const command = protractor.Key.chord(ctrl, 'a') + protractor.Key.BACK_SPACE;
        await locator.sendKeys(command);
        await locator.clear();
    }

}
