import {BasePage} from './helper/BasePage';
import {element, By} from 'protractor';
import {TextBoxHelper} from './helper/TextBoxHelper';
import {PageHelper} from './helper/PageHelper';

export class LoginPage extends BasePage {

    static get usernameTextBox() {
        return element(By.id('user dropdown'));

    }

    static get passwordTextBox() {
        return element(By.id('user dropdown'));

    }

    static get logInButton() {
        return element(By.id('user dropdown'));
    }

    static enterUserName(userName: string) {
        TextBoxHelper.sendKeys(LoginPage.usernameTextBox, userName);
    }

    static async enterPassword(userName: string) {
        await TextBoxHelper.sendKeys(LoginPage.passwordTextBox, userName);
    }

    static get projectTab() {
        return element(By.xpath('//span[text()=\' Projects\']'));

    }

    static async clickLoginButton() {
        await PageHelper.click(LoginPage.logInButton);
    }

    static async isProjectTabDisplayed() {
        return await PageHelper.isElementDisplayed(LoginPage.projectTab);
    }

}
