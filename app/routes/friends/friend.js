import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let results = this.store.findRecord('friend', params.id);
    return results;
  }
});
