import authService, { localStorageKey } from "./authService"
import 'jest-localstorage-mock'
import SandboxApi from '../components/sandboxApi'

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

        await expect(authService.verify()).rejects.toBeUndefined()
        expect(localStorage.getItem(localStorageKey)).toBeNull()
    });
})
