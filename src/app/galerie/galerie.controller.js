(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('GalerieController', ['dataFactory', 'Lightbox', function (dataFactory, Lightbox) {
      var vm = this;

      dataFactory.getGalerie().then(function (response) {
          vm.data = response.data;
        }, function () {
        });

      vm.openLightboxModal = function (index) {
        Lightbox.openModal(vm.data.bilder, index);
      };

  }]);


})();
