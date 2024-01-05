import { createStore } from 'vuex';

const screens = [
  { tag: 'sm', from: 0, to: 640 },
  { tag: 'md', from: 641, to: 768 },
  { tag: 'lg', from: 769, to: 1024 },
  { tag: 'xl', from: 1025, to: 1280 },
  { tag: '2xl', from: 1281, to: 5000 },
];

const state = () => {
  return {
    dims: {
      width: null,
      height: null,
    },
    size: 'sm',
  };
};

const mutations = {
  setDims(state, { width, height }) {
    state.dims = { width, height };
  },
  setSize(state, newVal) {
    state.size = newVal;
  },
};

const actions = {
  async setDimsAndSize({ commit }) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    commit('setDims', { width, height });
    commit('setSize', screens.filter((v) => width >= v.from && width <= v.to)[0].tag);
  },
};

const plugins = [
  // (store) => {
  //   window.addEventListener('resize', createDebounce(20)(store.dispatch('setDimsAndSize')));
  // },
  // (store) => {
  //   window.addEventListener(
  //     'resize',
  //     (e) => {
  //       console.log(`Done`);
  //     })
  // },
];

export default createStore({
  state,
  mutations,
  plugins,
  actions,
});
