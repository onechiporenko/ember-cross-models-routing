import Ember from 'ember';

const {set, get, isEmpty} = Ember;
const {keys} = Object;

export default Ember.Mixin.create({

  /**
   * Parent-route for current route
   * If user is moved there, some extra data is set to it:
   *  `childRouteToCross`
   *  `childRouteQp`
   *
   * @type {string}
   */
  parentRouteToCross: '',

  actions: {
    willTransition(transition) {
      let parentRouteToCross = get(this, 'parentRouteToCross');
      if (transition.targetName === parentRouteToCross) {
        let handler = this.router.router.getHandler(parentRouteToCross);
        set(handler, 'childRouteToCross', get(this, 'routeName'));
        let queryParams = get(this, 'queryParams');
        let qKeys = keys(queryParams);
        if (!isEmpty(qKeys)) {
          let qp = get(this, 'controller').getProperties(qKeys);
          set(handler, 'childRouteQp', qp);
        }
      }
      return this._super(...arguments);
    }
  }

});
