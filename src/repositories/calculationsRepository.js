import Client from './axiosClient';

const resource = '/calculator';

export default {
    get(algorithmInitialData) {
        return Client.post(`${resource}/divide`, algorithmInitialData);
    }
};