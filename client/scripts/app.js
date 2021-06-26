var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    App.fetch();
    setInterval(App.fetch, 5000);
  },

  fetch: function(callback = () => {}) {
    App.startSpinner();
    Parse.readAll(function(data) {
      Messages.update(data, MessagesView.render);
      Rooms.update(data, RoomsView.render);
      callback();
    });
    App.stopSpinner();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
