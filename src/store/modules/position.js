import { positionService } from "@/service/position.service";

const state = {
  positions: [],
};
const getters = {
  positions: (state) => state.positions,
};
const mutations = {
  SET_POSITION(state, payload) {
    state.positions = payload;
  },
  ADD_POSITION(state, payload) {
    state.positions.push(payload);
  },
  DELETE_POSITION(state, positionId) {
    state.positions = state.positions.filter(position => position.id !== positionId);
  },
};
const actions = {
  async getPositions({ commit }) {
    try {
      const positions = await positionService.getPositions();
      commit("SET_POSITION", positions);
    } catch (error) {
      console.error("Pozisyonlar getirilmedi:", error);
    }
  },
  async savePosition({ commit }, payload) {
    try {
      const response = await positionService.savePosition(payload);
      commit("ADD_POSITION", response.data);
    } catch (error) {
      console.error("Pozisyon kaydedilemedi:", error);
    }
  },
  async deletePosition({ commit }, positionId) {
    try {
      await positionService.deletePostion(positionId);
      commit("DELETE_POSITION", positionId);
    } catch (error) {
      console.error("Pozisyon silinemedi:", error);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
