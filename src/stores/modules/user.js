const { API_HOST } = window;
// const API_HOST = "https://hire-find.herokuapp.com";

const state = {};

const getters = {};

const mutations = {};

const actions = {
  async registerUser({ dispatch }, user) {
    let formData = new FormData();

    if (user) {
      Object.keys(user).forEach(name => {
        formData.append(name, user[name]);
      });
    }

    try {
      let data = await dispatch(
        "postData",
        {
          url: `${API_HOST}/authen/register`,
          data: user,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        },
        { root: true }
      );

      dispatch("setUser", data, { root: true });
    } catch (error) {
      console.log(error);
    }
  }
};

export default { state, getters, mutations, actions };
