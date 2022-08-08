import Repository from "../../repositories/repositoryFactory"

const CalculationsRepository = Repository.get("calculations");

const state = () => ({
    amount: null,
    generationsNumber: 10,
    solutionsPerPopulation: 10,
    lambda: 0.5,
    result: null
})

const getters = {}

const actions = {
    divideMoneyBetweenAssets({commit}) {
        return CalculationsRepository.get().then(response => {
            commit('setResult', response.data)
            return response;
        })
    },
    /*    addMeeting({dispatch}, meeting) {
            return MeetingsRepository.add(meeting).then(response => {
                dispatch('getMeetings');
                return response;
            })
        },*/
}

const mutations = {
    setNumberOfGenerations(state, generationsNumber) {
        state.generationsNumber = generationsNumber
    },
    setNumberOfParentsMating(state, numberOfParentsMating) {
        state.numberOfParentsMating = numberOfParentsMating;
    },
    setSolutionsPerPopulation(state, solutionsPerPopulation) {
        state.solutionsPerPopulation = solutionsPerPopulation;
    },
    setResult(state, result) {
        state.result = result;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}