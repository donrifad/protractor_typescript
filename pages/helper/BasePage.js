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
const protractor_1 = require("protractor");
const PageHelper_1 = require("./PageHelper");
class BasePage {
    static get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.waitForAngularEnabled(true);
            yield PageHelper_1.PageHelper.maximizeWindow();
            return protractor_1.browser.get(url, PageHelper_1.PageHelper.DEFAULT_TIMEOUT);
        });
    }
    goTo() {
        throw new Error('Method not implemented.');
    }
    verifyExistence() {
        throw new Error('Method not implemented.');
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMkNBQW1DO0FBQ25DLDZDQUF3QztBQUV4QztJQUlJLE1BQU0sQ0FBTyxHQUFHLENBQUMsR0FBVzs7WUFDeEIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxNQUFNLHVCQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEMsTUFBTSxDQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSx1QkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hELENBQUM7S0FBQTtJQUVELElBQUk7UUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGVBQWU7UUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNKO0FBakJELDRCQWlCQyJ9