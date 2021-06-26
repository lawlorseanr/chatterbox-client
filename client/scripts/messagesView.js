var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    var data = Messages.messagesList;
    this.$chats.html('');

    for (var i = 0; i < data.length; i++) {
      var badWords = ['<style', '<script'];
      var stringyData = JSON.stringify(data[i]).toLowerCase();
      var naughty = _.reduce(badWords, function(memo, str) {
        return memo || stringyData.indexOf(str) >= 0;
      }, false);

      var invalid = data[i].username === null || data[i].text.length === 0;
      if (naughty || invalid) {
        continue;
      }

      Rooms.add(data[i].roomname);

      var $newMessage = $(MessageView.render(data[i]));
      this.$chats.append($newMessage);
    }
  }

};