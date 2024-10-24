const axios = require('axios');

class APIClient {
    constructor(baseURL, headers = {}) {
        this.client = axios.create({
            baseURL,
            timeout: 10000, // 10 seconds timeout
            headers
        });
    }

    async get(endpoint) {
        try {
            const response = await this.client.get(endpoint);
            return response;
        } catch (error) {
            console.error(`GET request failed: ${error}`);
            throw error;
        }
    }

    // Going to leave out other endpoints for sake of time
}

module.exports = APIClient;