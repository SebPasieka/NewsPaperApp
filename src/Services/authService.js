import SandboxApi from '../SandboxApi'

const localStorageKey = "credentials"

class AuthService {
    verify(username, password) {
        return new Promise((resolve, reject) => {
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic '+btoa(username+':'+password),
                }
            };
            const url = 'https://sandbox-api.ipool.asideas.de/sandbox/api/search'
            return fetch(url, requestOptions)
                .then((response) => {
                    if (response.ok) {
                        resolve("verified")
                        const credentials = btoa(username+':'+password)
                        localStorage.setItem(localStorageKey, credentials)
                    } else if (!response.ok) {
                        reject("not verified")
                        localStorage.removeItem(localStorageKey)
                    }
                })
        })

    }
    getCredentials() {
        return localStorage.getItem(localStorageKey)
    }

}

export default new AuthService()