import SandboxApi from '../components/sandboxApi'

export const localStorageKey = "credentials"

class AuthService {
    verify(credentials) {
           return SandboxApi.logInTest(credentials)
               .then((response) => {
                    if (response.ok) {
                        localStorage.setItem(localStorageKey, credentials)
                        return Promise.resolve()
                    } else {
                        localStorage.removeItem(localStorageKey)
                        return Promise.reject()
                    }
                })

    }
    getCredentials() {
        return localStorage.getItem(localStorageKey)
    }

}

export default new AuthService()