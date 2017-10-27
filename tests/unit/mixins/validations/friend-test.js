import EmberObject from '@ember/object';
import ValidationsFriendMixin from 'starter-project/mixins/validations/friend';
import { module, test } from 'qunit';

module('Unit | Mixin | validations/friend');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidationsFriendObject = EmberObject.extend(ValidationsFriendMixin);
  let subject = ValidationsFriendObject.create();
  assert.ok(subject);
});
