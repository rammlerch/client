(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('RdwController', function (dataFactory) {
      var vm = this;
      vm.vote = 7;
      dataFactory.getRammlerDerWoche().then(function (response) {
        vm.data = response.data;
      });

      vm.doVote = function() {
        dataFactory.vote(vm.vote);
      }

      vm.inPerc = function(stimme) {
        return stimme / vm.data.totalStimmen * 100;
      }

    });

})();
