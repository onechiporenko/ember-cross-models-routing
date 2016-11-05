import Ember from 'ember';

const {get} = Ember;

export default Ember.Route.extend({

  model() {
    let game = this.modelFor('main.games.game');
    return get(this, 'store').query('user', {game_id: get(game, 'id')});
  }

});
