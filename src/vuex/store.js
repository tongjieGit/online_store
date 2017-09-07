import vue from 'Vue';
import vuex from 'Vuex';

const state = {
  firstData: 0,
}

const mutations = {
  updataFirstData(state,newDate){
    state.firstData = newData;
  }
}

export default new Vuex.store({
  state,
  mutations
})