(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('GalerieDetailController', ['dataFactory', 'Lightbox', '$routeParams', function (dataFactory, Lightbox, $routeParams) {
      var vm = this;

      dataFactory.getGalerie($routeParams.id).then(function (response) {
          vm.data = response.data;
        }, function () {
        });

      vm.openLightboxModal = function (index) {
        Lightbox.openModal(vm.data.bilder, index);
      };

  }]);


})();
