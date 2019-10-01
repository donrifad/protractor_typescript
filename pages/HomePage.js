"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BasePage_1 = require("./helper/BasePage");
class HomePage extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = '/';
    }
    static get userDropDown() {
        return protractor_1.element(protractor_1.By.className('user dropdown'));
    }
    static get menuBar() {
        return protractor_1.element(protractor_1.By.className('nav'));
    }
    static get profitReportLink() {
        return '';
    }
    static get logoutLinkFrescoTwo() {
        return protractor_1.element(protractor_1.By.className('log_out'));
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIb21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF1QztBQUN2QyxnREFBMkM7QUFFM0MsY0FBc0IsU0FBUSxtQkFBUTtJQUF0Qzs7UUFDSSxRQUFHLEdBQUcsR0FBRyxDQUFDO0lBa0JkLENBQUM7SUFoQkcsTUFBTSxLQUFLLFlBQVk7UUFDbkIsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxNQUFNLEtBQUssT0FBTztRQUNkLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxLQUFLLGdCQUFnQjtRQUN2QixNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELE1BQU0sS0FBSyxtQkFBbUI7UUFDMUIsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FFSjtBQW5CRCw0QkFtQkMifQ==