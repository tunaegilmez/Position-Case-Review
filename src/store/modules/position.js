// import { positionService } from "@/service/position.service";

const state = {
  positions: [],
};
const getters = {
  positions: (state) => state.positions,
};
const mutations = {
  SET_PAYLOAD(state, paylod) {
    state.positions = paylod;
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
