import DS from 'ember-data';
import Ember from 'ember';

const {RSVP, A} = Ember;

let games = {
  data: [
    {
      id: '1',
      type: 'game',
      attributes: {
        name: 'WoW'
      }
    },
    {
      id: '2',
      type: 'game',
      attributes: {
        name: 'SC2'
      }
    }
  ]
};

export default DS.JSONAPIAdapter.extend({

  findAll() {
    return new RSVP.Promise(resolve => resolve(games));
  },

  findRecord(store, type, id) {
    return new RSVP.Promise(resolve => resolve({data: A(games.data).findBy('id', id)}));
  }

});
