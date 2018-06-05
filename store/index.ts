import { ISchedule } from "models/Schedule";
import { IVtuber } from "models/Vtuber";

interface IState {
  schedules: ISchedule[];
  vtubers: IVtuber[];
}

const state = (): IState => ({
  schedules: [],
  vtubers: []
});

const mutations = {
  BULK_INSERT_VTUBERS(state: IState, payload: IVtuber[]) {
    state.vtubers.push(...payload);
  },
  BULK_INSERT_SCHEDULES(state: IState, payload: ISchedule[]) {
    state.schedules.push(...payload);
  }
}

const actions = {
  nuxtServerInit({ commit }, { route }) {
    const vtubers = <IVtuber[]>(require("../assets/talents.json"));
    commit("BULK_INSERT_VTUBERS", vtubers);
  }
};

const getters = {
  getVtubers: (state: IState): IVtuber[] => {
    return state.vtubers;
  },
  getVtuber: (state: IState): (id: string) => IVtuber => {
    return (id: string) => state.vtubers.filter(w => w.id === id)[0];
  }
};

export {
  actions,
  getters,
  mutations,
  state
};
