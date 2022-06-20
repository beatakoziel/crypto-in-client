import Repository from "../../repositories/repositoryFactory"

const CalculationsRepository = Repository.get("calculations");

const state = () => ({
    numberOfGenerations: null,
    numberOfParentsMating: null,
    solPerPop: null,
    result: null
})

const getters = {}

const actions = {
    getCalculationsResult({commit}) {
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
    setNumberOfGenerations(state, numberOfGenerations) {
        state.numberOfGenerations = numberOfGenerations
    },
    setNumberOfParentsMating(state, numberOfParentsMating) {
        state.numberOfParentsMating = numberOfParentsMating;
    },
    setSolPerPop(state, solPerPop) {
        state.solPerPop = solPerPop;
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