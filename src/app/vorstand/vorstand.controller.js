(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('VorstandController', function (dataFactory, Lightbox) {
      var vm = this;

      dataFactory.getVorstand().then(function (response) {
        vm.entries = response.data;
      }, function () {
      });

      vm.openLightboxModal = function (index) {
        Lightbox.openModal(vm.entries, index);
      };
  });


})();
