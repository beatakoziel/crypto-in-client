import Client from './axiosClient';

const resource = '/info';

export default {
    getAssets() {
        return Client.get(`${resource}/assets`);
    },
    getPeriods() {
        return Client.get(`${resource}/periods`);
    },
};