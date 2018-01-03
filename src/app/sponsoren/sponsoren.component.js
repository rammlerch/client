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
          $ctrl.activeSlide = Math.floor(Math.random() * 9);

          $ctrl.sponsoren = [
            {id: 0, image: 'assets/images/sponsoren/grafic_design.jpg', url: 'http://www.gdnet.ch'},
            {id: 1, image: 'assets/images/sponsoren/kronenberg.jpg'},
            {id: 2, image: 'assets/images/sponsoren/inter_cheese.jpg', url: 'http://www.intercheese.ch'},
            {id: 3, image: 'assets/images/sponsoren/s_team_sportswear.jpg', url: 'http://www.s-team.ch'},
            {id: 4, image: 'assets/images/sponsoren/mueller_steinag_element.jpg', url: 'http://www.mueller-steinag.ch/MUeLLER-STEINAG-ELEMENT-AG'},
            {id: 5, image: 'assets/images/sponsoren/gilli_hoerberatung.jpg', url: 'http://www.gilli-hoerberatung.ch'},
            {id: 6, image: 'assets/images/sponsoren/garage_fries.jpg', url: 'http://garagefries.ch'},
            {id: 7, image: 'assets/images/sponsoren/musikpunkt.jpg', url: 'http://www.musikpunkt.ch'},
            {id: 8, image: 'assets/images/sponsoren/computerline.jpg', url: 'http://www.computerline.com/de'}
          ];
        };
      }
    });

})();
