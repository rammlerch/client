
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
          { name: 'Rammler der Woche', path: '/rdw'},
          { name: 'Galerie', path: '/galerie'}
        ];
      },
      router: function() {
        return [
          { path: '/', component: 'main' },
          { path: '/verein/vorstand', component: 'vorstand' },
          { path: '/verein/kontakt', component: 'kontakt' },
          { path: '/verein/impressum', component: 'impressum' },
          { path: '/mitglieder/:instr', component: 'mitglied' },
          { path: '/mitglieder2/:instr', component: 'mitglied2' },
          { path: '/agenda', component: 'agenda' },
          { path: '/galerie', component: 'galerie' },
          { path: '/galerie/:id', component: 'galerieDetail' },
          { path: '/rdw', component: 'rdw' },
          { path: '/rdw/:id', component: 'rdwDetail' },
          { path: '/rdw/nomination', component: 'rdwNomination' },
          { path: '/0848fe13e07316b54817afb60a9d10eb441e3fcfc4bb54b26dbcb037872f3d98', component: 'mitgliederportrait' },
          { path: '/0848fe13e07316b54817afb60a9d10eb441e3fcfc4bb54b26dbcb037872f3d98/:id', component: 'mitgliederportraitFragebogen' }
        ];
      }
    };

  });
