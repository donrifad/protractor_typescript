import {Login} from '../functions/Login';
import {describe, expect} from 'jasmine';

describe('Login Test', () => {
    beforeEach(async () => {
        await Login.loadApp('');
    });

    it('valid Login', async () => {
        await expect(await Login.isPageProjectTabDisplayed()).toBe(true);
    });

    afterEach(async () => {
        // Logout of the application
    });
});
