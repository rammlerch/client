(function() {
  'use strict';

  angular
    .module('rammler')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/navbar/navbar.html',
      controller: NavbarController,
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, pages) {
      $scope.navigation = pages.navigation();
    }
  }

})();
