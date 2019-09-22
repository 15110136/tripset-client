import $http from "axios";

const { API_HOST } = window;
let changeLoadingStatusTimeout;

const state = {
  isLogined: false,
  isLoaded: false,
  user: ""
};

const getters = {};

const mutations = {
  changeLoadingStatus(state, status) {
    state.isLoaded = status;
  },

  setUser(state, user) {
    state.user = user;
  },

  setLoginStatus(state, status) {
    state.isLogined = status;
  }
};

const actions = {
  async getData({ dispatch }, config) {
    dispatch("changeLoadingStatus", false, { root: true });

    let isOptionString = typeof config === "string";

    let option = isOptionString ? { url: config } : config;

    option = { ...option, method: "GET" };

    const {
      data: { data }
    } = await $http(option);

    dispatch("changeLoadingStatus", true, { root: true });

    return data;
  },

  async postData({ dispatch, state }, config) {
    !state.isLoadConfig &&
      dispatch("changeLoadingStatus", false, { root: true });

    let option = {
      ...config,
      method: "POST",
      withCredentials: true
    };

    const {
      data: { data }
    } = await $http(option);

    !state.isLoadConfig &&
      dispatch("changeLoadingStatus", true, { root: true });

    return data;
  },

  changeLoadingStatus({ commit }, status) {
    clearTimeout(changeLoadingStatusTimeout);
    changeLoadingStatusTimeout = setTimeout(() => {
      commit("changeLoadingStatus", status);
    }, 100);
  },

  async onLogin({ dispatch }, dataUser) {
    try {
      let data = await dispatch("postData", {
        url: `${API_HOST}/authen/login`,
        data: dataUser.user
      });

      if (dataUser.rememberMe) {
        localStorage.setItem("userId", data._id);
      }

      dispatch("setUser", data);
      dispatch("setLoginStatus", true);
    } catch (error) {
      console.log(error.response.data.err);
    }
  },

  async checkRememberUser({ dispatch }) {
    let userId = localStorage.getItem("userId");

    try {
      let data = await dispatch("postData", {
        url: `${API_HOST}/authen/remember-me`,
        data: {
          userId
        }
      });

      dispatch("setUser", data);
      dispatch("setLoginStatus", true);
    } catch (error) {
      console.log(error.response);
    }
  },

  setUser({ commit }, user) {
    commit("setUser", user);
  },
  setLoginStatus({ commit }, status) {
    commit("setLoginStatus", status);
  }
};

export default { state, getters, mutations, actions };
