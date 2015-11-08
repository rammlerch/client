(function() {
  'use strict';

  angular.module('rammler').filter('tel', function () {
    return function (tel) {
      if (!tel) { return ''; }

      var vorwahl, nummer;

      if(tel.substr(0,1) == '+') {
        vorwahl = tel.substr(0,3) + ' ' + tel.substr(3,2);
        nummer = tel.substr(5);
      } else {
        vorwahl = tel.substr(0,3);
        nummer = tel.substr(3);
      }

      nummer = nummer.substr(0,3) + " " + nummer.substr(3,2) + " " + nummer.substr(5,2);

      return vorwahl + " " + nummer;
    };
  });
})();
