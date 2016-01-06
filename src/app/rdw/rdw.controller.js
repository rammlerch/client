(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('RdwController', function (dataFactory) {
      var vm = this;
      vm.vote = 0;
      dataFactory.getRammlerDerWoche().then(function (response) {
        vm.data = response.data;
      });

      vm.doVote = function() {
        dataFactory.vote(vm.vote).then(function (response) {
          vm.data.canVote = false;
          for (i = 0; i < vm.data.entries.length; i++) {
            if(vm.data.entries[i].id==vm.vote) {
              vm.data.entries[i].stimmen = vm.data.entries[i].stimmen + 1;
              break;
            }
          }
          });
      }

      vm.inPerc = function(stimme) {
        return stimme / vm.data.totalStimmen * 100;
      }

    });

})();
