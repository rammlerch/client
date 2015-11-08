(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('AgendaController', function (dataFactory) {
      var vm = this
      dataFactory.getAgenda().then(function (response) {
          vm.entries = response.data;
        }, function () {
        });

  });


})();
