var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(message) {
    var $newMessage = $('<div class="message"><span>' + message.username + ': ' + message.text + '</span></div>');
    this.$chats.append($newMessage);
  }

};