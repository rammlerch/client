(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('RdwNominationController', function (dataFactory) {
      var vm = this;

      vm.alert = {
        "type": null,
        "msg": null,
        "show": false
      }

      vm.closeAlert = function() {
        vm.alert.show = false;
      }

      vm.aktiv = false;
      dataFactory.getRdwNomination().then(function(response) {
        vm.data.umfrage = response.data.id;
        vm.aktiv = vm.data.umfrage != null;
      });

      vm.data = {
        "mitglied": null,
        "text": null,
        "umfrage": null,
        "passwort": null
      }

      vm.showMessage = false;

      dataFactory.getMitglieder().then(function(response) {
        vm.mitglieder = response.data;
      });


      vm.nominieren = function() {
        dataFactory.nominate(vm.data).then(function(response) {
          vm.alert.type = "success";
          vm.alert.msg = "Nomination gespeichert";
          vm.alert.show = true;

          vm.data = {
            "mitglied": null,
            "text": null,
            "umfrage": null,
            "passwort": null
          }
        }, function(response) {
          vm.alert.type = "danger";
          vm.alert.msg = "Passwort falsch!";
          vm.alert.show = true;
        })
      }
    });

})();
