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
const BasePage_1 = require("./helper/BasePage");
const protractor_1 = require("protractor");
const TextBoxHelper_1 = require("./helper/TextBoxHelper");
const PageHelper_1 = require("./helper/PageHelper");
class LoginPage extends BasePage_1.BasePage {
    static get usernameTextBox() {
        return protractor_1.element(protractor_1.By.id('user dropdown'));
    }
    static get passwordTextBox() {
        return protractor_1.element(protractor_1.By.id('user dropdown'));
    }
    static get logInButton() {
        return protractor_1.element(protractor_1.By.id('user dropdown'));
    }
    static enterUserName(userName) {
        TextBoxHelper_1.TextBoxHelper.sendKeys(LoginPage.usernameTextBox, userName);
    }
    static enterPassword(userName) {
        TextBoxHelper_1.TextBoxHelper.sendKeys(LoginPage.passwordTextBox, userName);
    }
    static get projectTab() {
        return protractor_1.element(protractor_1.By.xpath('//span[text()=\' Projects\']'));
    }
    static clickLoginButton() {
        PageHelper_1.PageHelper.click(LoginPage.logInButton);
    }
    static isProjectTabDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PageHelper_1.PageHelper.isElementDisplayed(LoginPage.projectTab);
        });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsMkNBQXVDO0FBQ3ZDLDBEQUFxRDtBQUNyRCxvREFBK0M7QUFFL0MsZUFBdUIsU0FBUSxtQkFBUTtJQUVuQyxNQUFNLEtBQUssZUFBZTtRQUN0QixNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUVELE1BQU0sS0FBSyxlQUFlO1FBQ3RCLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUUzQyxDQUFDO0lBRUQsTUFBTSxLQUFLLFdBQVc7UUFDbEIsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQWdCO1FBQ2pDLDZCQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBZ0I7UUFDakMsNkJBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsTUFBTSxLQUFLLFVBQVU7UUFDakIsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7SUFFN0QsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0I7UUFDbkIsdUJBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxNQUFNLENBQU8scUJBQXFCOztZQUM5QixNQUFNLENBQUMsTUFBTSx1QkFBVSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRSxDQUFDO0tBQUE7Q0FFSjtBQXJDRCw4QkFxQ0MifQ==