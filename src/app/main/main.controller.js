(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('MainController', function (dataFactory, Lightbox) {
      var vm = this;
      vm.entries = [{"url" : "assets/images/flyer_kickoff.png", "thumbUrl" : "assets/images/flyer_kickoff_klein.png"}];

      vm.openLightboxModal = function (index) {
        Lightbox.openModal(vm.entries, index);
      };

    });
})();
