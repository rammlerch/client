(function () {
  'use strict';

  angular
    .module('rammler')
    .controller('MitgliederportraitFragebogenController', ['$routeParams', 'dataFactory', function ($routeParams, dataFactory) {
      var vm = this;

      vm.id = $routeParams.id / 113581321;

      dataFactory.getMitgliderportrait(vm.id)
        .then(function (response) {
          vm.portrait = response.data;
          if(!vm.portrait.hat_geantwortet) {
            vm.zeigeFragenFormular = true;
            ladeFragen();
          }
        });

        vm.fragebogenSpeichern = function() {
            dataFactory.saveMitgliderportraitFragen(vm.id, vm.antworten)
            .then(function() {
              vm.zeigeFragenFormular = false;
            })
            .catch(function() {
              alert('Fehler beim Speichern. Versuche es später noch einmal.');
            });
        };

        function ladeFragen() {
          dataFactory.getMitgliderportraitFragen()
            .then(function (response) {
              vm.fragen = response.data;
            });
        }


    }]);


})();
