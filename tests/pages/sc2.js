import {
  create,
  clickable,
  hasClass
} from 'ember-cli-page-object';

export const sc2 = {
  goToZeratul: clickable('.nav.users li:eq(0) a'),
  onZeratul: hasClass('active', '.nav.users li:eq(0)'),
  goToKerrigan: clickable('.nav.users li:eq(1) a'),
  onKerrigan: hasClass('active', '.nav.users li:eq(1)'),
  goToRaynor: clickable('.nav.users li:eq(2) a'),
  onRaynor: hasClass('active', '.nav.users li:eq(2)')
};

export default create(sc2);
