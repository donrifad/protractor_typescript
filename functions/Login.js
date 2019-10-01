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
const LoginPage_1 = require("../pages/LoginPage");
class Login {
    static loadQcenter(url) {
        return __awaiter(this, void 0, void 0, function* () {
            LoginPage_1.LoginPage.get(url);
        });
    }
    static login(userName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            LoginPage_1.LoginPage.enterUserName(userName);
            LoginPage_1.LoginPage.enterPassword(password);
            LoginPage_1.LoginPage.clickLoginButton();
        });
    }
    static isPageProjectTabDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield LoginPage_1.LoginPage.isProjectTabDisplayed();
        });
    }
}
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBRTdDO0lBRUksTUFBTSxDQUFPLFdBQVcsQ0FBQyxHQUFXOztZQUNoQyxxQkFBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sS0FBSyxDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7O1lBQ2pELHFCQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLHFCQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLHFCQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8seUJBQXlCOztZQUNsQyxNQUFNLENBQUMsTUFBTSxxQkFBUyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDbkQsQ0FBQztLQUFBO0NBRUo7QUFoQkQsc0JBZ0JDIn0=