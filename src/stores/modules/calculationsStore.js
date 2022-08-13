import Repository from "../../repositories/repositoryFactory"

const CalculationsRepository = Repository.get("calculations");

const state = () => ({
    amount: null,
    generationsNumber: 10,
    solutionsPerPopulation: 10,
    lambda: 0.5,
    result: {
        response: null,
        isError: false
    },
    loading: false
})

const getters = {
    isLoading(state) {
        return state.loading
    },
    getResult(state) {
        return state.result
    }
}

const actions = {
    divideMoneyBetweenAssets({commit}, algorithmInitialData) {
        commit('startLoading')
        commit('resetResult')
        return CalculationsRepository.calculate(algorithmInitialData).then(response => {
            console.log(response)
            commit('setSuccessResult', response.data)
            commit('stopLoading')
            return response;
        }).catch(error => {
            commit('setErrorResult', error.message)
            commit('stopLoading')
        })
    },
}

const mutations = {
    setErrorResult(state, result) {
        state.result.response = result;
        state.result.isError = true;
    },
    setSuccessResult(state, result) {
        state.result.response = result;
        state.result.isError = false;
    },
    resetResult(state) {
        state.result.response = null;
        state.result.isError = false;
    },
    startLoading(state) {
        state.loading = true
    },
    stopLoading(state) {
        state.loading = false
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}