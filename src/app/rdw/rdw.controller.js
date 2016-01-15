(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('RdwController', function (dataFactory) {
      var vm = this;
      dataFactory.getRammlerDerWochen().then(function (response) {
        vm.data = response.data;
      });
    });

})();
