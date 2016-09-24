(function () {
  'use strict';

  angular
    .module('rammler')
    .controller('Mitglied2Controller', ['$routeParams', 'dataFactory',function ($routeParams, dataFactory) {
      var vm = this;
      vm.instr = $routeParams.instr;

      dataFactory.getMitglied(vm.instr).then(function (response) {
        vm.entries = response.data;
      }, function () {
      });

    }]);


})();
