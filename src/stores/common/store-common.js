import { createStore } from "vuex";
import { HTTP } from "../../configs/http-common";

const storeCommon = createStore({
  state() {
    return {
      listDataSexuals: [],
      listDataInterests: [],
    };
  },

  mutations: {
    setListDataSexuals(state, data) {
      state.listDataSexuals = data;
    },
    setListDataInterests(state, data) {
      state.listDataInterests = data;
    },
  },

  actions: {
    async getListDataSexuals({ commit }, { entityName, entityId }) {
      debugger;
      await HTTP.get(
        `base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`
      )
        .then((response) => {
          debugger;
          commit("setListDataSexuals", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getListDataInterests({ commit }, { entityName, entityId }) {
      debugger;
      await HTTP.get(
        `base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`
      )
        .then((response) => {
          debugger;
          commit("setListDataInterests", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default storeCommon;
