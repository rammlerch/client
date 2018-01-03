(function() {
  'use strict';

  angular
    .module('rammler')
    .component('agenda', {
      templateUrl: 'app/agenda/agenda.html',
      controller: function (dataFactory) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          dataFactory.getAgenda().then(function (response) {
            $ctrl.entries = response.data;
          });
        }
      }
    });

})();
