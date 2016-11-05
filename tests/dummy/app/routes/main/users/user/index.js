import Ember from 'ember';
import CrossModelsRoutingParent from 'ember-cross-models-routing/mixins/cross-models-routing-parent';

export default Ember.Route.extend(CrossModelsRoutingParent, {

  defaultChild: 'main.users.user.classes'

});
