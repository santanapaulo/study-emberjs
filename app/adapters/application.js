import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  headers: {
    'Content-Type': 'application/json',
  },
  updateRecord: function (store, type, snapshot) {
    var data = {};
    var serializer = store.serializerFor(type.modelName);

    serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

    var id = snapshot.id;
    var url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');

    return this.ajax(url, 'PUT', { data: data });
  },
  methodForRequest({ requestType }) {
    if (requestType === "updateRecord") {
      return "PUT";
    }

    return this._super(...arguments);
  },
  host: "https://ember-interview.herokuapp.com"
});
