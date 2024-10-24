const APIClient = require('./apiClient');

class getEmployeeAPI {
    constructor() {
        this.client = new APIClient('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees/', {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'charset': 'UTF-8',
             Authorization: 'Basic VGVzdFVzZXI0NzY6Q1I/I3hIQTsycnVw'
        });
    }

    async getEmployeeById(id) {
        const response = await this.client.get(`${id}`);
        return response;
    }
}

module.exports = new getEmployeeAPI();