(function () {
  'use strict';

  angular
    .module('rammler')
    .component('register', {
      bindings: {
        instrument: '<'
      },
      templateUrl: 'app/register/register.html',
      controller: function (dataFactory) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          dataFactory.getMitglied($ctrl.instrument).then(function (response) {
            $ctrl.mitglieder = response.data;
          });
        };
      }
    });


})();
