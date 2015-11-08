(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('MitgliedController', ['$routeParams', 'dataFactory', 'Lightbox', function ($routeParams, dataFactory, Lightbox) {
      var vm = this;
      vm.instr = $routeParams.instr;

      dataFactory.getMitglied(vm.instr).then(function (response) {
          vm.entries = response.data;
        }, function () {
        });

      vm.openLightboxModal = function (index) {
        Lightbox.openModal(vm.entries, index);
      };

  }]);


})();
