import {
  create,
  visitable,
  clickable,
  hasClass
} from 'ember-cli-page-object';
import {fields} from './fields';
import {wow} from './wow';
import {sc2} from './sc2';

export default create({
  ...fields,
  ...sc2,
  ...wow,
  visit: visitable('/main/games'),
  goToWow: clickable('.nav.games a:eq(0)'),
  onWow: hasClass('.nav.games a:eq(0)'),
  goToSc2: clickable('.nav.games a:eq(1)'),
  onSc2: hasClass('.nav.games a:eq(1)'),
  isActive: hasClass('active', '.examples a:eq(1)')
});
