import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render, waitFor } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | conekta-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.set('onSuccess', async (response) => {
      assert.equal(response.object, 'token')
      assert.ok(response.id)
    });
    this.set('onError', () => {});

    await render(hbs`{{conekta-form onSuccess=(action onSuccess) onError=(action onError)}}`);

    await fillIn('input[name="name"]', 'Ricardo Tapia Mancera');
    await fillIn('input[name="number"]', '4242424242424242');
    await fillIn('input[name="exp_month"]', '12');
    await fillIn('input[name="exp_year"]', '2020');
    await fillIn('input[name="cvc"]', '123');
    await click('button[type="submit"]');
    await waitFor('form.settled');
  });
});
