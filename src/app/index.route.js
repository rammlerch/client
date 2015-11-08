(function() {
  'use strict';

  angular
    .module('rammler')
    .config(function ($componentLoaderProvider) {
      $componentLoaderProvider.setTemplateMapping(function(name) {
        return 'app/' + name + '/' + name + '.html';
      });
    })
    .controller('RouterController', function ($router, pages) {
      $router.config(pages.router());
    });


})();
