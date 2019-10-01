import {LoginPage} from '../pages/LoginPage';

export class Login {

    static async loadApp(url: string) {
        await LoginPage.get(url);
    }

    static async login(userName: string, password: string) {
        await LoginPage.enterUserName(userName);
        await LoginPage.enterPassword(password);
        await LoginPage.clickLoginButton();
    }

    static async isPageProjectTabDisplayed() {
        return await LoginPage.isProjectTabDisplayed();
    }

}
