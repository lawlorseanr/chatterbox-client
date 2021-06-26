var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    // reset element
    this.$chats.html('');
    for (var i = 0; i < Messages.storage.length; i++) {
      // stringify message
      var message = JSON.stringify(Messages.storage[i]);
      // if there's no undesirable text
      // want length > 0; don't want  script or style tags
      var valid = Messages.storage[i].text.length > 0 && Messages.storage[i].username.length > 0;
      if (message.indexOf('script') >= 0 || message.indexOf('style') >= 0 || !valid) {
        continue;
      }
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