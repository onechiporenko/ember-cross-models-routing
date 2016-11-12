import Ember from 'ember';
import CrossModelsRoutingChild from 'ember-cross-models-routing/mixins/cross-models-routing-child';

export default Ember.Route.extend(CrossModelsRoutingChild, {

  parentRouteToCross: 'main.users.user.index'

});
