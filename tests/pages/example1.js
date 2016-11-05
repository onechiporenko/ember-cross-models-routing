import {
  create,
  visitable
} from 'ember-cli-page-object';
import {fields} from './fields';
import {wow} from './wow';

export default create({
  ...fields,
  ...wow,
  visit: visitable('/main/users')
});
