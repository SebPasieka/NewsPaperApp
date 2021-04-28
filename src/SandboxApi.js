
class SandboxApi {
    fetchArticles(keyword = "") {
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+btoa('sebastian.pasieka:9WGDbRz2Hf'),
            }
        };
        const url = 'https://sandbox-api.ipool.asideas.de/sandbox/api/search?types=article&publisher=welt&q='+keyword
         return fetch(url, requestOptions)
         .then(response => response.json())

    }
}
export default new SandboxApi();