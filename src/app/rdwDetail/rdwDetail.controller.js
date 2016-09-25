(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('RdwDetailController', ['$routeParams', 'dataFactory', function ($routeParams, dataFactory) {
      var vm = this;
      vm.showForm = false;
      vm.vote = 0;
      dataFactory.getRammlerDerWoche($routeParams.id).then(function (response) {
        vm.data = response.data;
        vm.showForm = vm.data.canVote;
      });

      vm.doVote = function() {
        dataFactory.vote(vm.vote).then(function () {
          dataFactory.getRammlerDerWoche($routeParams.id).then(function (response) {
            vm.data = response.data;
            vm.showForm = vm.data.canVote;
          })
        });
      };

      vm.toggleForm = function() {
        if(vm.data.canVote) {
          vm.showForm = !vm.showForm;
        }
      };

      vm.inPerc = function(stimme) {
        if (vm.data.totalStimmen > 0) {
          return stimme / vm.data.totalStimmen * 100;
        } else {
          return 0;
        }

      }

    }]);

})();
