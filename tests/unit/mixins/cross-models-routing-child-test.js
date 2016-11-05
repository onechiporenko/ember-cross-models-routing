import Ember from 'ember';
import CrossModelsRoutingChildMixin from 'ember-cross-models-routing/mixins/cross-models-routing-child';
import { module, test } from 'qunit';

module('Unit | Mixin | cross models routing child');

// Replace this with your real tests.
test('it works', function(assert) {
  let CrossModelsRoutingChildObject = Ember.Object.extend(CrossModelsRoutingChildMixin);
  let subject = CrossModelsRoutingChildObject.create();
  assert.ok(subject);
});
