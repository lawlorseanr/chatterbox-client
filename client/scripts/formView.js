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
    newMessage.roomname = Rooms.selected || 'lobby';
    FormView.$form.find('#message').val('');
    Parse.create(newMessage, function(data) {
      Messages.update(data, MessagesView.render);
    });
  },

  render: function(data) {
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }


};