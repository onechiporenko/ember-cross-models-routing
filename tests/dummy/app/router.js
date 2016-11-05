import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main', function() {
    this.route('users', function() {
      this.route('user', {path: ':user_id'}, function() {
        this.route('locations');
        this.route('affiliation');
        this.route('classes');
      });
    });
    this.route('games', function() {
      this.route('game', {path: ':game_id'}, function() {
        this.route('users', function() {
          this.route('user', {path: ':user_id'}, function() {
            this.route('locations');
            this.route('affiliation');
            this.route('classes');
          });
        });
      });
    });
  });
});

export default Router;
