const assert = require('assert');
const app = require('../../src/app');

describe('\'inventories\' service', () => {
  it('registered the service', () => {
    const service = app.service('inventories');

    assert.ok(service, 'Registered the service (inventories)');
  });
});
