(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('RdwController', function (dataFactory) {
      var vm = this;
      vm.showForm = false;
      vm.vote = 0;
      dataFactory.getRammlerDerWoche().then(function (response) {
        vm.data = response.data;
        vm.showForm = vm.data.canVote;
      });

      vm.doVote = function() {
        dataFactory.vote(vm.vote).then(function (response) {
          vm.data.canVote = false;
          vm.showForm = false;
          for (i = 0; i < vm.data.entries.length; i++) {
            if(vm.data.entries[i].id==vm.vote) {
              vm.data.entries[i].stimmen = vm.data.entries[i].stimmen + 1;
              break;
            }
          }
          });
      }

      vm.toggleForm = function() {
        if(vm.data.canVote) {
          vm.showForm = !vm.showForm;
        }
      }

      vm.inPerc = function(stimme) {
        return stimme / vm.data.totalStimmen * 100;
      }

    });

})();
