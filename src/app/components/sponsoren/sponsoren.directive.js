(function() {
  'use strict';

  angular
    .module('rammler')
    .directive('sponsoren', sponsoren);

  /** @ngInject */
  function sponsoren() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/sponsoren/sponsoren.html',
      controller: SponsorenController,
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SponsorenController($scope) {
      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.sponsoren = [
        {image: 'assets/images/sponsoren/grafic-design.jpeg', url: 'http://www.gdnet.ch/'},
        {image: 'assets/images/sponsoren/kronenberg.png'},
        {image: 'assets/images/sponsoren/intercheese.png', url: 'http://www.intercheese.ch/'},
        {image: 'assets/images/sponsoren/s-team.png', url: 'http://www.s-team.ch/'},
        {image: 'assets/images/sponsoren/mse.jpeg', url: 'http://www.ms-element.ch/'},
        {image: 'assets/images/sponsoren/gilli.png', url: 'http://www.gilli-hoerberatung.ch/'},
        {image: 'assets/images/sponsoren/lehmann_schreinerei.png'},
        {image: 'assets/images/sponsoren/musikpunkt.png', url: 'http://www.musikpunkt.ch/'},
        {image: 'assets/images/sponsoren/computerline.png', url: 'http://www.computerline.com/de/'},
      ];
    }
  }

})();
