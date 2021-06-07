import 'whatwg-fetch';
import authService from "../services/authService"

class SandboxApi {
    fetchArticles(keyword = "") {
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+authService.getCredentials(),
            }
        };
        const url = 'https://sandbox-api.ipool.asideas.de/sandbox/api/search?types=article&publisher=welt&q='+keyword
         return fetch(url, requestOptions)
         .then(response => response.json())

    }

    logInTest(credentials) {
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+credentials,
            }
        };
        const url = 'https://sandbox-api.ipool.asideas.de/sandbox/api/search'
        return fetch(url, requestOptions)
    }
}
export default new SandboxApi();