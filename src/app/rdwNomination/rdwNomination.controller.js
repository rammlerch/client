(function() {
  'use strict';

  angular
    .module('rammler')
    .component('rdwNomination', {
      templateUrl: 'app/rdwNomination/rdwNomination.html',
      controller: function (dataFactory) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          $ctrl.aktiv = false;
          $ctrl.data = {
            "mitglied": null,
            "text": null,
            "umfrage": null,
            "passwort": null
          };
          dataFactory.getRdwNomination().then(function (response) {
            $ctrl.data.umfrage = response.data.id;
            $ctrl.aktiv = $ctrl.data.umfrage != null;
          });
          dataFactory.getMitglieder().then(function (response) {
            $ctrl.mitglieder = response.data;
          });
          $ctrl.alert = {
            "type": null,
            "msg": null,
            "show": false
          };
          $ctrl.showMessage = false;
        };
        $ctrl.closeAlert = function () {
          $ctrl.alert.show = false;
        };

        $ctrl.nominieren = function () {
          dataFactory.nominate($ctrl.data).then(function () {
            $ctrl.alert.type = "success";
            $ctrl.alert.msg = "Nomination gespeichert";
            $ctrl.alert.show = true;

            $ctrl.data = {
              "mitglied": null,
              "text": null,
              "umfrage": null,
              "passwort": null
            }
          }, function () {
            $ctrl.alert.type = "danger";
            $ctrl.alert.msg = "Passwort falsch!";
            $ctrl.alert.show = true;
          })
        }
      }
    });

})();
