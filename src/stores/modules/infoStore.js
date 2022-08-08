import Repository from "../../repositories/repositoryFactory"

const InfoRepository = Repository.get("info");

const state = () => ({
    assets: []
})

const getters = {}

const actions = {
    getAssets({commit}) {
        return InfoRepository.getAssets().then(response => {
            commit('setAssets', response.data)
            return response;
        }).catch(error => {
            return error.response;
        });
    }
}

const mutations = {
    setAssets(state, assets) {
        state.assets = assets
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}