import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = payload.map((friend) => {
      return {
        id: friend._id,
        name: friend.name,
        lastname: friend.lastname,
        friendsSince: friend.friendsSince
      }
    });
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
