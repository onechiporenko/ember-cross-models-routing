import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  race: DS.attr('string'),
  game: DS.belongsTo('game'),
  locations: DS.attr(),
  classes: DS.attr(),
  affiliation: DS.attr(),

});
