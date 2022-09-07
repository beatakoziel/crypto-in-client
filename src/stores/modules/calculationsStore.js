import Repository from "../../repositories/repositoryFactory"

const CalculationsRepository = Repository.get("calculations");

const state = () => ({
    result: {
        response: [],
        isError: false
    },
    donutChartSeries: [],
    donutChartLabels: [],
    lineChartSeries: [],
    loading: false
})

const getters = {
    isLoading(state) {
        return state.loading
    },
    getResult(state) {
        return state.result
    },
    getSeries(state) {
        return state.donutChartSeries
    },
    getLabels(state) {
        return state.donutChartLabels
    },
    getLineChartSeries(state) {
        return state.lineChartSeries
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
        state.donutChartSeries = []
        Array.from(result.solution).forEach(elem => {
            state.donutChartSeries.push(elem.percentageSolution)
        })
        state.donutChartLabels = []
        Array.from(result.solution).forEach(elem => {
            state.donutChartLabels.push(elem.assetName)
        })
        state.lineChartSeries = []
        let series = []
        Array.from(result.generations_results).forEach(elem => {
                series.push(elem.fitness)
        })
        state.lineChartSeries.push({name: "Fitness value", data: series})
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