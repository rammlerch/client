(function() {
  'use strict';

  angular
    .module('rammler')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

  angular.module('rammler').config(function (LightboxProvider) {
    LightboxProvider.templateUrl = 'app/lightbox/template.html';

    LightboxProvider.calculateModalDimensions = function (dimensions) {
      var width = Math.max(400, dimensions.imageDisplayWidth + 32);

      if (width >= dimensions.windowWidth - 20 || dimensions.windowWidth < 768) {
        width = 'auto';
      }

      return {
        'width': width,                             // default
        'height': 'auto'                            // custom
      };
    };
  });
})();
