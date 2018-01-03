(function() {
  'use strict';

  angular
    .module('rammler')
    .component('sponsoren', {
      templateUrl: 'app/sponsoren/sponsoren.html',
      controller: function () {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          $ctrl.myInterval = 5000;
          $ctrl.noWrapSlides = false;
          $ctrl.activeSlide = Math.floor(Math.random() * 9) + 0;

          $ctrl.sponsoren = [
            {id: 0, image: 'assets/images/sponsoren/grafic-design.jpeg', url: 'http://www.gdnet.ch/'},
            {id: 1, image: 'assets/images/sponsoren/kronenberg.png'},
            {id: 2, image: 'assets/images/sponsoren/intercheese.png', url: 'http://www.intercheese.ch/'},
            {id: 3, image: 'assets/images/sponsoren/s-team.png', url: 'http://www.s-team.ch/'},
            {id: 4, image: 'assets/images/sponsoren/mse.jpeg', url: 'http://www.ms-element.ch/'},
            {id: 5, image: 'assets/images/sponsoren/gilli.png', url: 'http://www.gilli-hoerberatung.ch/'},
            {id: 6, image: 'assets/images/sponsoren/lehmann_schreinerei.png'},
            {id: 7, image: 'assets/images/sponsoren/musikpunkt.png', url: 'http://www.musikpunkt.ch/'},
            {id: 8, image: 'assets/images/sponsoren/computerline.png', url: 'http://www.computerline.com/de/'},
          ];
        };
      }
    });

})();
