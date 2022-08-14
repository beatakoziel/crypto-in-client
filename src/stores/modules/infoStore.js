import Repository from "../../repositories/repositoryFactory"

const InfoRepository = Repository.get("info");

const state = () => ({
    assets: [],
    periods: []
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
    },
    getPeriods({commit}) {
        return InfoRepository.getPeriods().then(response => {
            commit('setPeriods', response.data)
            return response;
        }).catch(error => {
            return error.response;
        });
    }
}

const mutations = {
    setAssets(state, assets) {
        state.assets = assets
    },
    setPeriods(state, periods) {
        state.periods = periods
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}