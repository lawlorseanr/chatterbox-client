var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    document.getElementById('updateButton').addEventListener('click', function() {
      FormView.update();
    });
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {};
    var username = window.location.search.indexOf('username=');
    message.username = window.location.search.slice( + 10);
    message.text = this.message.value;
    message.roomname = RoomsView.rooms.getCurrent();

    this.message.value = '';
    Parse.create(message);
  },

  update: function() {
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  render: function(data) {
    for (var i = 0; i < data.length; i++) {

      var badWords = ['console.log', '<style'];
      var stringyData = JSON.stringify(data[i]).toLowerCase();
      var naughty = _.reduce(badWords, function(memo, str) {
        return memo || stringyData.indexOf(str) >= 0;
      }, false);

      var invalid = data[i].username === null || data[i].text.length === 0;
      if (naughty || invalid) {
        continue;
      }

      var message = {};
      message.username = data[i].username;
      message.text = data[i].text;
      message.roomname = data[i].roomname;
      message.campus = data[i].campus;
      message.github = data[i].github_handle;
      message.date = data[i].created_at;

      MessagesView.render(message);
    }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};