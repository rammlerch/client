(function() {
  'use strict';

  angular
    .module('rammler')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, pages) {
      $scope.brand = pages.brand();
      $scope.navigation = pages.navigation();
    }
  }

})();
