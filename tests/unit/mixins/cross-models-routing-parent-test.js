import Ember from 'ember';
import CrossModelsRoutingParentMixin from 'ember-cross-models-routing/mixins/cross-models-routing-parent';
import { module, test } from 'qunit';

module('Unit | Mixin | cross models routing parent');

// Replace this with your real tests.
test('it works', function(assert) {
  let CrossModelsRoutingParentObject = Ember.Object.extend(CrossModelsRoutingParentMixin);
  let subject = CrossModelsRoutingParentObject.create();
  assert.ok(subject);
});
