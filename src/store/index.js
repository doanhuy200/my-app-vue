import Vuex from 'vuex'
// import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid'

// Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: uuidv4(),
        title: 'Việc 1',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Việc 2',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Việc 3',
        completed: false
      },
    ]
  },

  getters: {
  },

  mutations: {

  },

  actions:{
  }
});

export default store

