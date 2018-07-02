export default {

  namespace: 'product',

  state: {

  },

  reducers: {
    save(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },

  effects: {
    *fetch({payload}, {call, put}) {

    },
  },

  subscriptions: {
    
  },

};