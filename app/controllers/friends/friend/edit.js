import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      this.get("model").save().then(() => {
        this.transationToRoute('friends.friend.show', this.get('model'));
      });
    }
  }
});
