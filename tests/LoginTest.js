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
const Login_1 = require("../functions/Login");
describe('Qcenter Login Test', () => {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield Login_1.Login.loadQcenter('http://qcentertest.sysco.net:4202');
    }));
    it('valid Login', () => __awaiter(this, void 0, void 0, function* () {
        expect(yield Login_1.Login.isPageProjectTabDisplayed()).toBe(true);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5UZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9naW5UZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFJekMsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBQzNCLFVBQVUsQ0FBQztRQUNQLE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsYUFBYSxFQUFFO1FBQ2IsTUFBTSxDQUFDLE1BQU0sYUFBSyxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=