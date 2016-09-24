(function () {
  'use strict';

  angular
    .module('rammler')
    .controller('MitglieddetailController', ['$routeParams', 'dataFactory', function ($routeParams, dataFactory) {
      var vm = this;
      vm.id = $routeParams.id;
      vm.type = $routeParams.type;

      dataFactory.getMitgliderportrait(vm.id, vm.type).then(function (response) {
        vm.entry = response.data;
      }, function () {
      });

    }]);


})();
