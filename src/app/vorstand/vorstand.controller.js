(function() {
  'use strict';

  angular
    .module('rammler')
    .component('vorstand', {
      templateUrl: 'app/vorstand/vorstand.html',
      controller: function (dataFactory, Lightbox) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          dataFactory.getVorstand().then(function (response) {
            $ctrl.entries = response.data;
            angular.forEach($ctrl.entries, function (value) {
              var newlines = 0;
              if (value.adresse == null) {
                newlines += 2;
              }
              if (value.telefon == null) {
                newlines += 1;
              }
              value.newlines = new Array(newlines);
              value.newlineshtml = "<br />&nbsp;<br />&nbsp;<br />&nbsp;";
            });
          });
        };

        $ctrl.openLightboxModal = function (index) {
          Lightbox.openModal($ctrl.entries, index);
        };
      }
    });


})();
