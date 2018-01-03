(function () {
  'use strict';

  angular
    .module('rammler')
    .component('mitgliederportraitFragebogen', {
      bindings: {
        id: '<'
      },
      templateUrl: 'app/mitgliederportraitFragebogen/mitgliederportraitFragebogen.html',
      controller: function (dataFactory) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          $ctrl.id = $ctrl.id / 113581321;

          dataFactory.getMitgliderportrait($ctrl.id)
            .then(function (response) {
              $ctrl.portrait = response.data;
              if(!$ctrl.portrait.hat_geantwortet) {
                $ctrl.zeigeFragenFormular = true;
                ladeFragen();
              }
            });
        };

        $ctrl.fragebogenSpeichern = function() {
          dataFactory.saveMitgliderportraitFragen($ctrl.id, $ctrl.antworten)
            .then(function() {
              $ctrl.zeigeFragenFormular = false;
            })
            .catch(function() {
              alert('Fehler beim Speichern. Versuche es später noch einmal.');
            });
        };

        function ladeFragen() {
          dataFactory.getMitgliderportraitFragen()
            .then(function (response) {
              $ctrl.fragen = response.data;
            });
        }
      }
    });


})();
