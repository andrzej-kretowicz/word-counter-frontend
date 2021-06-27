import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words: [],
  },
  mutations: {
    refreshWords(state, words) {
      state.words = words;
    },
  },
  actions: {
    async saveWord(context, payload) {
      await api.saveText(payload);
    },
    async getWords(context) {
      const words = (await api.getWords()).data;
      context.commit("refreshWords", words);
    },
  },
  modules: {},
});
