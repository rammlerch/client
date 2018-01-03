(function() {
  'use strict';

  angular
    .module('rammler')
    .component('rdwDetail', {
      bindings: {
        id: '<'
      },
      templateUrl: 'app/rdwDetail/rdwDetail.html',
      controller: function (dataFactory) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          $ctrl.showForm = false;
          $ctrl.vote = 0;
          dataFactory.getRammlerDerWoche($ctrl.id).then(function (response) {
            $ctrl.data = response.data;
            $ctrl.showForm = $ctrl.data.canVote;
          });
        };

        $ctrl.doVote = function() {
          dataFactory.vote($ctrl.vote).then(function () {
            dataFactory.getRammlerDerWoche($ctrl.id).then(function (response) {
              $ctrl.data = response.data;
              $ctrl.showForm = $ctrl.data.canVote;
            })
          });
        };

        $ctrl.toggleForm = function() {
          if($ctrl.data.canVote) {
            $ctrl.showForm = !$ctrl.showForm;
          }
        };

        $ctrl.inPerc = function(stimme) {
          if ($ctrl.data.totalStimmen > 0) {
            return stimme / $ctrl.data.totalStimmen * 100;
          } else {
            return 0;
          }

        }
      }
    });

})();
