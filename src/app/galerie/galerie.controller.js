(function() {
  'use strict';

  angular
    .module('rammler')
    .component('galerie', {
      templateUrl: 'app/galerie/galerie.html',
      controller: function (dataFactory) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          dataFactory.getGalerien().then(function (response) {
            $ctrl.data = response.data;
          });
        };
      }
    });

})();
