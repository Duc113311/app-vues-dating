import { createStore } from "vuex";
import { HTTP } from "../../configs/http-common";

const storeCommon = createStore({
  state() {
    return {
      listSexuals: [],
    };
  },

  mutations: {
    setListSexuals(state, data) {
      state.listSexuals = data;
    },
  },

  actions: {
    async getListDataCommon({ commit }, { entityName, entityId }) {
      debugger;
      await HTTP.get(
        `base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`
      )
        .then((response) => {
          debugger;
          commit("setListSexuals", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default storeCommon;
