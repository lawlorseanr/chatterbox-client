var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#chats').on('click', '.username', MessagesView.handleClick);
  },

  render: function(data) {
    MessagesView.$chats.html('');
    data.forEach(function(message) {
      if (Rooms.isSelected(message.roomname)) {
        var $newMessage = $(MessageView.render(message));
        MessagesView.$chats.prepend($newMessage);
      }
    });
  },

  handleClick: function(event) {
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username);
    MessagesView.render(Messages.items());
  }

};