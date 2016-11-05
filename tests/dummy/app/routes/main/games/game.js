import Ember from 'ember';

const {get} = Ember;

export default Ember.Route.extend({

  model(game) {
    return get(this, 'store').findRecord('game', game.game_id);
  }

});
