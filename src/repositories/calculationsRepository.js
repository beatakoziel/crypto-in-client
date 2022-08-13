import Client from './axiosClient';

const resource = '/calculator';

export default {
    calculate(algorithmInitialData) {
        return Client.post(`${resource}/divide`, algorithmInitialData);
    }
};