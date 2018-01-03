(function() {
  'use strict';

  angular
    .module('rammler')
    .component('navbar', {
      templateUrl: 'app/navbar/navbar.html',
      controller: function () {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          $ctrl.navigation = [
            { name: 'Home', path: '/'},
            { name: 'Verein', path: '/verein', dropdown:[
              { name: 'Vorstand', path: '/verein/vorstand'},
              { name: 'Kontakt', path: '/verein/kontakt'},
              { name: 'Impressum', path: '/verein/impressum'}
            ]},
            { name: 'Mitglieder', path: '/mitglieder', dropdown:[
              { name: 'Tambourmajor', path: '/mitglieder/tambourmajor'},
              { name: 'Trompete', path: '/mitglieder/trompete'},
              { name: 'Posaune', path: '/mitglieder/posaune'},
              { name: 'Euphonium', path: '/mitglieder/euphonium'},
              { name: 'Bass', path: '/mitglieder/bass'},
              { name: 'Schlagzeug', path: '/mitglieder/schlagzeug'},
              { name: 'Pauke', path: '/mitglieder/pauke'},
              { name: 'Glocke', path: '/mitglieder/glocke'}
            ]},
            { name: 'Agenda', path: '/agenda'},
            { name: 'Galerie', path: '/galerie'}
          ];
        };
      }
    });
})();
