import Ember from 'ember';

const {setProperties, set, get, A, isEmpty} = Ember;
const {keys} = Object;

export default Ember.Mixin.create({

  /**
   * Child route to redirect user
   *
   * @type {string}
   */
  childRouteToCross: '',

  /**
   * Default child route to redirect user
   * Used if `childRouteToCross` is not provided
   *
   * @type {string}
   */
  defaultChild: '',

  /**
   * Query params for child route
   * Is not used if `useQpOnCross` is `false`
   *
   * @type {?object}
   */
  childRouteQp: null,

  /**
   * Determines if query params should be used on redirect to the child route (if child route is equal to `childRouteToCross`)
   *
   * @type {boolean}
   */
  useQpOnCross: true,

  init() {
    setProperties(this, {
      childRouteToCross: '',
      childRouteQp: null,
      useQpOnCross: true
    });
    return this._super(...arguments);
  },

  /**
   * Get list of models used in the transition (for each dynamic route)
   *
   * @param {object} model
   * @returns {object[]}
   *
   * @private
   */
  _getModels(model) {
    let handlers = this.router.router.currentHandlerInfos || [];
    let models = A(handlers.filter(h => keys(h.params).length)).mapBy('context');
    if (isEmpty(models)) {
      return [model];
    }
    models[models.length - 1] = model;
    return models;
  },

  afterModel(model) {
    let childRouteToCross = get(this, 'childRouteToCross');
    let defaultChild = get(this, 'defaultChild');
    let models = this._getModels(model);
    let customArgsForTransition = [childRouteToCross, ...models];
    let useQpOnCross = get(this, 'useQpOnCross');
    if (useQpOnCross) {
      let childRouteQp = get(this, 'childRouteQp');
      customArgsForTransition.push({queryParams: childRouteQp});
    }
    if (childRouteToCross) {
      return this.transitionTo(...customArgsForTransition);
    }
    if (defaultChild) {
      customArgsForTransition[0] = defaultChild;
      return this.transitionTo(...customArgsForTransition);
    }
    return this._super(...arguments);
  },

  actions: {
    willTransition() {
      set(this, 'childRouteToCross', null);
      set(this, 'childRouteQp', {});
      return this._super(...arguments);
    }
  }

});
