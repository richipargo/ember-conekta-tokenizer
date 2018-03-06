import Component from '@ember/component';
import layout from '../templates/components/conekta-form';
import { run } from '@ember/runloop';

export default Component.extend({
  layout,
  classNameBindings: ['settled'],
  /**
   * Component type
   */
  tagName: 'form',
  /**
   * Form status
   */
  disabled: false,
  /**
   * Wait for conekta resolution
   */
  settled: false,
  /**
   * Card Number
   */
  number: undefined,
  numberLabel: 'Número en la tarjeta',
  /**
   * Name on card
   */
  name: undefined,
  nameLabel: 'Nombre del tarjetahabiente',
  /**
   * Card expiration year
   */
  exp_year: undefined,
  expYearLabel: 'Año de expiración',
  /**
   * Card expiration month
   */
  exp_month: undefined,
  expMonthLabel: 'Mes de expiración',
  /**
   * Card security code
   */
  cvc: undefined,
  cvcLabel: 'CVC',
  /**
   * on success handler
   */
  onSuccess: undefined,
  success(response){
    this.set('settled', true);
    this.get('onSuccess')(response);
  },
  /**
   * on error handler
   */
  onError: undefined,
  /**
   * error show
   */
  error(response){
    this.set('settled', true);
    if(response.object === 'error'){
      let matcher = /\[(.*)\]/g;
      let param = matcher.exec(response.param);
      this.set(`${param[1]}_error`, response.message_to_purchaser);
    }
    this.get('onError')(response);
  },
  /**
   * Submit event action
   */
  submit(e){
    e.preventDefault();
    run(()=> {
      let data = {
        card: {
          number: this.get('number'),
          name: this.get('name'),
          cvc: this.get('cvc'),
          exp_year: this.get('exp_year'),
          exp_month: this.get('exp_month'),
        },
      };
      Conekta.Token.create(
        data,
        this.get('success').bind(this),
        this.get('error').bind(this)
      )
    });
  },
  actions: {
    validateNumber(field, e){
      e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
      this.set(field, e.target.value);
    }
  },
});
