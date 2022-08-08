import Client from './axiosClient';

const resource = '/info';

export default {
    getAssets() {
        return Client.get(`${resource}/assets`);
    },
};