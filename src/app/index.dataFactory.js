(function() {
  'use strict';

  angular
    .module('rammler')
    .service('dataFactory', function($http) {

      var urlBase = '/rest';
      var dataFactory = {};

      dataFactory.getAgenda = function () {
        return $http.get(urlBase+'/ch/rammler/agenda');
      };

      dataFactory.getVorstand= function () {
        return $http.get(urlBase+'/ch/rammler/vorstand');
      };

      dataFactory.getMitglied = function(register) {
        return $http.get(urlBase+'/ch/rammler/register/'+register+'/mitglied');
      };

      dataFactory.getGalerie = function() {
        return $http.get(urlBase + '/ch/rammler/galerie/1');
      };

      dataFactory.getRammlerDerWoche = function() {
        return $http.get(urlBase + '/ch/rammler/rdw/1');
      }

      dataFactory.vote = function(voteid) {
        return $http.put(urlBase + '/ch/rammler/vote/'+voteid);
      }

      return dataFactory;
    });

})();
