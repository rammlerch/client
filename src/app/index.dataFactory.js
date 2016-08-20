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

      dataFactory.getMitglieder = function() {
        return $http.get(urlBase+'/ch/rammler/mitglied');
      };

      dataFactory.getGalerie = function(galerieId) {
        return $http.get(urlBase + '/ch/rammler/galerie/'+galerieId);
      };

      dataFactory.getGalerien = function() {
        return $http.get(urlBase + '/ch/rammler/galerie/aktiv');
      };

      dataFactory.getRammlerDerWoche = function(rdwId) {
        return $http.get(urlBase + '/ch/rammler/rdw/'+rdwId);
      };

      dataFactory.getRammlerDerWochen = function() {
        return $http.get(urlBase + '/ch/rammler/rdw/aktiv');
      };

      dataFactory.getRdwNomination = function() {
        return $http.get(urlBase + '/ch/rammler/rdw/nomination/aktuell');
      };

      dataFactory.vote = function(voteid) {
        return $http.put(urlBase + '/ch/rammler/vote/'+voteid);
      };

      dataFactory.nominate = function(data) {
        return $http({
          url: urlBase + '/ch/rammler/rdw/nomination/aktuell',
          method: "PUT",
          data: data
        });
      };

      dataFactory.getMitgliderportraitListe = function() {
        return $http.get(urlBase + '/ch/rammler/mitgliederportrait');
      };

      dataFactory.getMitgliderportrait = function(id) {
        return $http.get(urlBase + '/ch/rammler/mitgliederportrait/' + id);
      };

      dataFactory.getMitgliderportraitFragen = function() {
        return $http.get(urlBase + '/ch/rammler/mitgliederportrait/fragen');
      };

      dataFactory.saveMitgliderportraitFragen = function(mitglied, antworten) {
        return $http.put(urlBase + '/ch/rammler/mitgliederportrait/'+mitglied+'/antworten', antworten);
      };

      dataFactory.saveFototermin = function(mitglied, fototermin) {
        return $http.put(urlBase + '/ch/rammler/mitgliederportrait/'+mitglied+'/fototermin/'+fototermin);
      };

      dataFactory.getMitgliderportraitFototermine = function() {
        return $http.get(urlBase + '/ch/rammler/mitgliederportrait/fototermin');
      };

      return dataFactory;
    });

})();
