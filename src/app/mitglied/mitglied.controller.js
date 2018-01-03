(function () {
  'use strict';

  angular
    .module('rammler')
    .component('mitglied', {
      bindings: {
        id: '<'
      },
      templateUrl: 'app/mitglied/mitglied.html',
      controller: function (dataFactory) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          dataFactory.getMitgliderportrait($ctrl.id).then(function (response) {
            $ctrl.entry = response.data;
          });
        };
      }
    });

})();
