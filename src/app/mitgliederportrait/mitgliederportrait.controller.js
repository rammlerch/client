(function () {
  'use strict';

  angular
    .module('rammler')
    .controller('MitgliederportraitController', ['$routeParams', 'dataFactory', function ($routeParams, dataFactory) {
      var vm = this;

      dataFactory.getMitgliderportraitListe()
        .then(function (response) {
          vm.liste = response.data;
        });

    }]);


})();
