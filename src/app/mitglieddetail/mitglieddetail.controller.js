(function () {
  'use strict';

  angular
    .module('rammler')
    .controller('MitglieddetailController', ['$routeParams', 'dataFactory', function ($routeParams, dataFactory) {
      var vm = this;
      vm.id = $routeParams.id;

      dataFactory.getMitgliderportrait(vm.id).then(function (response) {
        vm.entry = response.data;
      }, function () {
      });

    }]);


})();
