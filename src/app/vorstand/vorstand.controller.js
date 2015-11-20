(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('VorstandController', function (dataFactory, Lightbox) {
      var vm = this;

      dataFactory.getVorstand().then(function (response) {
        vm.entries = response.data;
        angular.forEach(vm.entries, function (value) {
          var newlines = 0;
          if (value.adresse == null) {
            newlines += 2;
          }
          if (value.telefon == null) {
            newlines += 1;
          }
          value.newlines = new Array(newlines);
          value.newlineshtml = "<br />&nbsp;<br />&nbsp;<br />&nbsp;";
        });
      }, function () {
      });

      vm.openLightboxModal = function (index) {
        Lightbox.openModal(vm.entries, index);
      };
  });


})();
