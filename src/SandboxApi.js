
class SandboxApi {
    fetchArticles(keyword) {
        keyword = "test"
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+btoa('sebastian.pasieka:9WGDbRz2Hf'),
            }
        };
        const url = 'https://sandbox-api.ipool.asideas.de/sandbox/api/search?types=article&publisher=welt%2C%20WELT&q='+keyword
         return fetch(url, requestOptions)
         .then(response => response.json())

    }
}
export default new SandboxApi();