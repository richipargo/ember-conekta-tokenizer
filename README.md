ember-conekta-tokenizer
==============================================================================

[Conekta.js](https://www.conekta.com/es) api form tokenizer and wrapper

Installation
------------------------------------------------------------------------------

```
ember install ember-conekta-tokenizer
```


Usage
------------------------------------------------------------------------------

1. In order to use the tokenizer form included on this addon you must first configure
setup the public key on `config/environment.js`

```javascript
module.exports = function(environment) {
  let ENV = {
    ...
    conekta: {
      public_key: '<public-key>'
    }
    ...
  }
} 
```

1. Component Usage

This component wraps necesary fields for PCI compliant card tokenization
```handlebars
  {{conekta-form onSuccess=(action <onsuccess-action>) onError=(action <onerror-action>)}}
```

- `onSuccess` action returns response from [Conekta.js](https://www.conekta.com/es)
containing detailed `token_id` and other information
- `onError` action returns error object from API and shows fields with errors on UI


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-conekta-tokenizer`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
