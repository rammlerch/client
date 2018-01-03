(function() {
  'use strict';

  angular
    .module('rammler')
    .component('galerieDetail', {
      bindings: {
        id: '<'
      },
      templateUrl: 'app/galerieDetail/galerieDetail.html',
      controller: function (dataFactory, Lightbox) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          dataFactory.getGalerie($ctrl.id).then(function (response) {
            $ctrl.data = response.data;
          });
        };

        $ctrl.openLightboxModal = function (index) {
          Lightbox.openModal($ctrl.data.bilder, index);
        };
      }
  });


})();
