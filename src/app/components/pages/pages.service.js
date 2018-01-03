
angular.module('rammler')
  .service('pages', function() {
    return {
      router: function() {
        return [
          { path: '/rdw', component: 'rdw' },
          { path: '/rdw/:id', component: 'rdwDetail' },
          { path: '/rdw/nomination', component: 'rdwNomination' },
          { path: '/0848fe13e07316b54817afb60a9d10eb441e3fcfc4bb54b26dbcb037872f3d98', component: 'mitgliederportrait' },
          { path: '/0848fe13e07316b54817afb60a9d10eb441e3fcfc4bb54b26dbcb037872f3d98/:id', component: 'mitgliederportraitFragebogen' }
        ];
      }
    };

  });
