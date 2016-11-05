import {
  create,
  clickable,
  hasClass
} from 'ember-cli-page-object';

export const fields = {
  goToClasses: clickable('.classes'),
  onClasses: hasClass('active', '.classes'),
  goToAffiliation: clickable('.affiliation'),
  onAffiliation: hasClass('active', '.affiliation'),
  goToLocations: clickable('.locations'),
  onLocations: hasClass('active', '.locations')
};

export default create(fields);
