import Vue from 'vue';
import Vuex from 'vuex';
import example3 from './unprepared/example3';
import example4 from './unprepared/example4';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    example3,
    example4,
  },
});