import Controller from "@ember/controller";

export default Controller.extend({
  newModel: {},
  actions: {
    save() {
      let model = this.store.createRecord("friend", this.get("newModel"));
      this.set("newModel", {});
      model.save().then(() => {
        this.transationToRoute("friends.friend.show", model);
      });
    }
  }
});
