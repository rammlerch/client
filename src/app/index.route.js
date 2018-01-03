(function() {
  'use strict';

  angular
    .module('rammler')
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/verein/vorstand', {
          template: '<vorstand></vorstand>'
        })
        .when('/verein/kontakt', {
          template: '<kontakt></kontakt>'
        })
        .when('/verein/impressum', {
          template: '<impressum></impressum>'
        })
        .when('/mitglieder/:id', {
          template: '<register instrument="$ctrl.instrument"></register>',
          controller: function ($routeParams) {
            var $ctrl = this;
            $ctrl.instrument = $routeParams.id;
          },
          controllerAs: '$ctrl'
        })
        .when('/mitglied/:id', {
          template: '<mitglied id="$ctrl.id"></mitglied>',
          controller: function ($routeParams) {
            var $ctrl = this;
            $ctrl.id = $routeParams.id;
          },
          controllerAs: '$ctrl'
        })
        .when('/agenda', {
          template: '<agenda></agenda>'
        })
        .when('/galerie', {
          template: '<galerie></galerie>'
        })
        .when('/galerie/:id', {
          template: '<galerie-detail id="$ctrl.id"></galerie-detail>',
          controller: function ($routeParams) {
            var $ctrl = this;
            $ctrl.id = $routeParams.id;
          },
          controllerAs: '$ctrl'
        })
        .when('/0848fe13e07316b54817afb60a9d10eb441e3fcfc4bb54b26dbcb037872f3d98', {
          template: '<mitgliederportrait></mitgliederportrait>'
        })
        .when('/0848fe13e07316b54817afb60a9d10eb441e3fcfc4bb54b26dbcb037872f3d98/:id', {
          template: '<mitgliederportrait-fragebogen id="$ctrl.id"></mitgliederportrait-fragebogen>',
          controller: function ($routeParams) {
            var $ctrl = this;
            $ctrl.id = $routeParams.id;
          },
          controllerAs: '$ctrl'
        })
        .otherwise({
          template: '<main></main>'
        });

      $locationProvider.html5Mode({
        enabled: true
      });
    });

})();
