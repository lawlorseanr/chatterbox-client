var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form (default POST)
    event.preventDefault();
    var message = {};
    message.username = App.username;
    message.text = FormView.$form.find('#message').val();
    message.roomname = Rooms.select || 'Main';

    FormView.$form.find('#message').value = '';
    Parse.create(message, function(data) {
      Object.assign(message, data);
      Messages.add(message, MessagesView.render);
    });
  },

  render: function(data) {
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }


};