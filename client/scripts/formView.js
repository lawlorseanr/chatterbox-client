var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    document.getElementById('updateButton').addEventListener('click', function() {
      $('#chats').html('');
      App.update();
    });
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {};
    message.username = App.username;
    message.text = this.message.value;
    message.roomname = Rooms.currentRoom;

    this.message.value = '';
    Parse.create(message);
  },

  render: function(data) {
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};