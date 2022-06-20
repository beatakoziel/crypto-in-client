import Client from './axiosClient';

const resource = '/genetic';

export default {
    get() {
        return Client.get(`${resource}`);
    }
};