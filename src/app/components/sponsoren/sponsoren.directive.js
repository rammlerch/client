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
      $scope.hauptsponsor = {image: 'assets/images/sponsoren/grafic-design.jpeg', url: 'http://www.gdnet.ch/'};
      $scope.sponsoren = [
        {image: 'assets/images/sponsoren/fahrschule_egger.png', url: 'http://www.egger-bueron.ch/'},
        {image: 'assets/images/sponsoren/hecht-holzbau.jpeg', url: 'http://hecht-holzbau.ch/'},
        {image: 'assets/images/sponsoren/intercheese.jpg', url: 'http://www.intercheese.ch/'},
        {image: 'assets/images/sponsoren/mse.jpeg', url: 'http://www.ms-element.ch/'},
        {image: 'assets/images/sponsoren/s-team.png', url: 'http://www.s-team.ch/'}
      ];
    }
  }

})();
