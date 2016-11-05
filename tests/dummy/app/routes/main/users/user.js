import Ember from 'ember';

const {get} = Ember;

export default Ember.Route.extend({

  model(user) {
    return get(this, 'store').findRecord('user', user.user_id);
  }

});
