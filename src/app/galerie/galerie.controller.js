(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('GalerieController', ['dataFactory', function (dataFactory) {
      var vm = this;

      dataFactory.getGalerien().then(function (response) {
          vm.data = response.data;
        }, function () {
        });

  }]);


})();
