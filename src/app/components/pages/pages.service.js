
angular.module('rammler')
  .service('pages', function() {
    return {
      brand: function() {
        return { name: 'Rammler.ch', path: '/'};
      },
      navigation: function() {
        return [
          { name: 'Home', path: '/'},
          { name: 'Verein', path: '/verein', dropdown:[
            { name: 'Vorstand', path: '/verein/vorstand'},
            { name: 'Kontakt', path: '/verein/kontakt'},
            { name: 'Impressum', path: '/verein/impressum'}
          ]},
          { name: 'Mitglieder', path: '/mitglieder', dropdown:[
            { name: 'Tambourmajor', path: '/mitglieder/tambourmajor'},
            { name: 'Trompete', path: '/mitglieder/trompete'},
            { name: 'Posaune', path: '/mitglieder/posaune'},
            { name: 'Euphonium', path: '/mitglieder/euphonium'},
            { name: 'Bass', path: '/mitglieder/bass'},
            { name: 'Schlagzeug', path: '/mitglieder/schlagzeug'},
            { name: 'Pauke', path: '/mitglieder/pauke'},
            { name: 'Glocke', path: '/mitglieder/glocke'}
          ]},
          { name: 'Agenda', path: '/agenda'},
          //{ name: 'Rammler der Woche', path: '/rdw'},
          { name: 'Galerie', path: '/galerie'}
          //{ name: 'Berichte', path: '/berichte'},
          //{ name: 'Galerie', path: '/galerie'},
          //{ name: 'Links', path: '/links'}
        ];
      },
      router: function() {
        return [
          { path: '/', component: 'main' },
          { path: '/verein/vorstand', component: 'vorstand' },
          { path: '/verein/kontakt', component: 'kontakt' },
          { path: '/verein/impressum', component: 'impressum' },
          { path: '/mitglieder/:instr', component: 'mitglied' },
          { name: 'Agenda', path: '/agenda', component: 'agenda' },
          { name: 'Galerie', path: '/galerie', component: 'galerie' },
          { path: '/rdw', component: 'rdw' }
          //{ name: 'Berichte', path: '/berichte', component: 'nyi' },
          //{ path: '/galerie', component: 'nyi' },
          //{ path: '/links', component: 'nyi' }
        ];
      }
    };

  });
