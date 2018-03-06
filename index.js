'use strict';

module.exports = {
  name: 'ember-conekta-tokenizer',

  contentFor(type){
    if(type === 'head-footer'){
      let env = this.project.config(process.env.EMBER_ENV);
      if(env.conekta && env.conekta.public_key){
        return `<script type="text/javascript" data-conekta-public-key="${env.conekta.public_key}" src="https://cdn.conekta.io/js/v1.0.1/conekta.js"></script>`;
      }
      this.ui.writeLine('Conekta public key not configured!');
      return '';
    }
  },
};
