var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(message) {
    var $newMessage = $('<div class="message"></div>');

    var $messageUsername = $('<div class="username"></div>');
    $messageUsername.html(message.username + ' (' + message.github + '):');

    var $messageText = $('<div class="messageText"></div>');
    $messageText.html(message.text);

    var $messageTime = $('<div class="timestamp"></div>');
    $messageTime.html(message.date);

    $newMessage.append($messageUsername);
    $newMessage.append($messageText);
    $newMessage.append($messageTime);

    this.$chats.append($newMessage);
  }

};