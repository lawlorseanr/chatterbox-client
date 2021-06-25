var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    // reset element
    this.$chats.html('');
    for (var i = 0; i < Messages.storage.length; i++) {
      MessagesView.renderMessage(Messages.storage[i]);
    }
    // messages.forEach(message => MessagesView.$chats.append(MessageView.render(message)));
    // creat a new div from the template
    // var $message = MessageView.render(message);
    // append that new div element to $chats
    // MessagesView.$chats.append($message);
  },

  renderMessage: function(message) {
    var $message = MessageView.render(message);
    MessagesView.$chats.append($message);
  }

};