const state = {
    headerActive: true
}
const getters = {
    value: (state, getters, rootState) => {
        return state.headerActive;
    },
    // hai: (state, getters, rootState) => {
    //     return '66666';
    // },
}
const actions = {
    acChangeValue: ({ commit, state }, data) => {
        commit('changeValue', data);
    }
}
const mutations = {
    changeValue: (state, data) => {
        state.headerActive = data
    }
}
export default {
    namespaced: true,
    state, getters, actions, mutations
}