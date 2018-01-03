(function() {
  'use strict';

  angular
    .module('rammler')
    .component('rdw', {
      templateUrl: 'app/rdw/rdw.html',
      controller: function (dataFactory) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          dataFactory.getRammlerDerWochen().then(function (response) {
            $ctrl.data = response.data;
          });
        };
      }
    });

})();
