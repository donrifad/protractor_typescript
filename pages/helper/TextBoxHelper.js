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
const WaitHelper_1 = require("./WaitHelper");
class TextBoxHelper {
    /**
     * Clears the existing text from an input elements
     * @param {ElementFinder} locator
     */
    static clearText(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            let ctrl = protractor_1.protractor.Key.CONTROL;
            if (protractor_1.browser.platform && protractor_1.browser.platform.indexOf('Mac')) {
                ctrl = protractor_1.protractor.Key.COMMAND;
            }
            const command = protractor_1.protractor.Key.chord(ctrl, 'a') + protractor_1.protractor.Key.BACK_SPACE;
            yield locator.sendKeys(command);
            yield locator.clear();
        });
    }
    /**
     * Send Keys to an input elements once it becomes available
     * @param {ElementFinder} locator for element
     * @param {string} value to be sent
     * @param {boolean} sendEnter for sending an enter key
     */
    static sendKeys(locator, value, sendEnter = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield WaitHelper_1.WaitHelper.getInstance().waitForElementToBeDisplayed(locator);
            yield this.clearText(locator);
            // On IE, text is sometimes not well sent, this is a workaround
            yield locator.sendKeys(value);
            if (sendEnter) {
                yield locator.sendKeys(protractor_1.protractor.Key.ENTER);
            }
        });
    }
}
exports.TextBoxHelper = TextBoxHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEJveEhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRleHRCb3hIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUE4RDtBQUM5RCw2Q0FBd0M7QUFHeEM7SUFDSTs7O09BR0c7SUFDSSxNQUFNLENBQU8sU0FBUyxDQUFDLE9BQXNCOztZQUNoRCxJQUFJLElBQUksR0FBRyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFFbEMsRUFBRSxDQUFDLENBQUMsb0JBQU8sQ0FBQyxRQUFRLElBQUksb0JBQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxHQUFHLHVCQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNsQyxDQUFDO1lBQ0QsTUFBTSxPQUFPLEdBQUcsdUJBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDNUUsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLENBQUM7S0FBQTtJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFPLFFBQVEsQ0FBQyxPQUFzQixFQUN0QixLQUFhLEVBQ2IsU0FBUyxHQUFHLEtBQUs7O1lBQzFDLE1BQU0sdUJBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFOUIsK0RBQStEO1lBQy9ELE1BQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNaLE1BQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBRUo7QUFuQ0Qsc0NBbUNDIn0=