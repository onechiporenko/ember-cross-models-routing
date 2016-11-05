import {
  create,
  clickable,
  hasClass
} from 'ember-cli-page-object';

export const wow = {
  goToThrall: clickable('.nav.users li:eq(0) a'),
  onThrall: hasClass('active', '.nav.users li:eq(0)'),
  goToKhadgar: clickable('.nav.users li:eq(1) a'),
  onKhadgar: hasClass('active', '.nav.users li:eq(1)'),
  goToMalfurion: clickable('.nav.users li:eq(2) a'),
  onMalfurion: hasClass('active', '.nav.users li:eq(2)')
};

export default create(wow);
