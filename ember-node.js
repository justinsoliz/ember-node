(function() {

if ('undefined' === typeof Ember) {
  Ember = {};

  if ('undefined' !== typeof window) {
    window.Em = window.Ember = Em = Ember;
  }
}

Ember.ENV = {};

var jQuery = this.jQuery || (Ember.imports && Ember.imports.jQuery);
if (!jQuery && typeof require === 'function') {
  jQuery = require('jquery');
}
Ember.$ = jQuery;

var Handlebars = (Ember.imports && Ember.imports.Handlebars) || (this && this.Handlebars);
if (!Handlebars && typeof require === 'function') {
  Handlebars = require('handlebars');
}
Ember.Handlebars = Handlebars;

require('./bower_components/ember/ember');

})();
