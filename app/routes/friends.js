import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let results = this.store.findAll('friend');
    return results;
  }
});
