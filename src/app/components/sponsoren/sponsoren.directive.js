(function() {
  'use strict';

  angular
    .module('rammler')
    .controller('SponsorenController', function () {
      var vm = this;
      vm.myInterval = 3000;
      vm.noWrapSlides = false;
      vm.hauptsponsor = {image: 'assets/images/sponsoren/grafic-design.jpeg', url: 'http://www.gdnet.ch/'};
      vm.sponsoren = [
        {image: 'assets/images/sponsoren/fahrschule_egger.png', url: 'http://www.egger-bueron.ch/'},
        {image: 'assets/images/sponsoren/hecht-holzbau.jpeg', url: 'http://hecht-holzbau.ch/'},
        {image: 'assets/images/sponsoren/intercheese.jpg', url: 'http://www.intercheese.ch/'},
        {image: 'assets/images/sponsoren/mse.jpeg', url: 'http://www.ms-element.ch/'},
        {image: 'assets/images/sponsoren/s-team.png', url: 'http://www.s-team.ch/'}
      ];
    }
  );

  angular
  .module('rammler')
  .directive('sponsoren', function () {
    var vm = this;
    vm.directive = {
      restrict: 'A',
      templateUrl: 'app/components/sponsoren/sponsoren.html',
      controller: SponsorenController,
      bindToController: true
    };

    return vm.directive;


  });


})();
