import Ember from 'ember';

const {setProperties, set, get, A, isEmpty} = Ember;

export default Ember.Mixin.create({

  childRouteToCross: '',
  defaultChild: '',
  childRouteQp: null,
  useQpOnCross: true,

  init() {
    setProperties(this, {
      childRouteToCross: '',
      childRouteQp: null,
      useQpOnCross: true
    });
    return this._super(...arguments);
  },

  _getModels(model) {
    let handlers = this.router.router.currentHandlerInfos || [];
    let models = A(handlers.filter(h => Object.keys(h.params).length)).mapBy('context');
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
    let args = [childRouteToCross, ...models];
    let useQpOnCross = get(this, 'useQpOnCross');
    if (useQpOnCross) {
      let childRouteQp = get(this, 'childRouteQp');
      args.push({queryParams: childRouteQp});
    }
    if (childRouteToCross) {
      return this.transitionTo(...args);
    }
    if (defaultChild) {
      args[0] = defaultChild;
      return this.transitionTo(...args);
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
