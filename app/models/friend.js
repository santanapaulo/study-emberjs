import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  name: DS.attr('string'),
  lastname: DS.attr('string'),
  friendsSince: DS.attr('string'),

  validations: {
    name: {
      presence: true,
      length: { minimum: 3 }
    },
    lastname: {
      presence: true,
      length: { minimum: 3 }
    },
  },
});
