(function() {
  'use strict';

  angular
    .module('rammler')
    .component('galerie', {
      bindings: {
        saison: '<'
      },
      templateUrl: 'app/galerie/galerie.html',
      controller: function (dataFactory) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          dataFactory.getGalerienForSaison($ctrl.saison).then(function (response) {
            $ctrl.data = response.data;
          });
        };
      }
    });

})();
