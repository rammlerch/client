(function () {
  'use strict';

  angular
    .module('rammler')
    .component('mitgliederportrait', {
      templateUrl: 'app/mitgliederportrait/mitgliederportrait.html',
      controller: function (dataFactory) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          dataFactory.getMitgliderportraitListe().then(function (response) {
              $ctrl.liste = response.data;
            });
        };
      }
    });


})();
