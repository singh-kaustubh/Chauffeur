
class Networking {

    static #queryBuilder(baseURL = '', queryParams = {}) {
        if (!baseURL.length) {
            return;
        }
        const queryString = Object.keys(queryParams)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
            .join('&');
        return urlWithQuery = `${baseURL}?${queryString}`;
    }

    static async #request(url = '', method, options = {}) {
        if (method === 'GET') {
            url = this.#queryBuilder(url, options.body);
        }
        const requestOptions = {
            method: method,
            headers: options.headers,
        };
        if (method === 'POST') {
            requestOptions.body = options.body;
        }
        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (await response.json());
        } catch (error) {
            throw new Error(`Fetch error: ${error.message}`);
        }
    }

    static async get(url, options = {}) {
        return await this.#request(url, 'GET', options);
    }

    static async post(url, options = {}) {
        return await this.#request(url, 'POST', options);
    }
}

export default Networking;
