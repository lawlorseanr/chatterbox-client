var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(message) {
    var $newMessage = $('<span>' + message + '</span>');
    this.$chats.append($newMessage);
  }

};