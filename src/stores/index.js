import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user";
import root from "./root";

Vue.use(Vuex);

const modules = {
  user
};

for (let mod in modules) {
  modules[mod].namespaced = true;
}

export default new Vuex.Store({
  ...root,
  modules
});
