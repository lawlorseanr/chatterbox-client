var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form (default POST)
    event.preventDefault();
    var newMessage = {};
    newMessage.username = App.username;
    newMessage.text = FormView.$form.find('#message').val();
    newMessage.roomname = Rooms.select || 'Main';
    FormView.$form.find('#message').val('');
    Parse.create(newMessage, function(data) {
      Messages.add(data[0], MessagesView.render);
    });
  },

  render: function(data) {
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }


};