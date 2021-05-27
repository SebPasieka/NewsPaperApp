import authService, { localStorageKey } from "./authService"
import 'jest-localstorage-mock'
import SandboxApi from '../SandboxApi'

describe("testing authService", () => {
    it('should return a resolve promise and save credentials in localStorage given a successful api call', async () => {
        jest.spyOn(SandboxApi, 'logInTest').mockResolvedValue({ok: true})

        await authService.verify("testValue")

        expect(SandboxApi.logInTest).toHaveBeenCalled();
        expect(localStorage.getItem(localStorageKey)).toBe("testValue")
    });
    it('should return a reject promise and remove credentials in localStorage given a unsuccessful api call', async () => {
        jest.spyOn(SandboxApi, 'logInTest').mockResolvedValue({ok: false})

        localStorage.setItem(localStorageKey, "wrongTestValue")
        await authService.verify()

        expect(localStorage.getItem(localStorageKey)).toBeNull()

    });
})