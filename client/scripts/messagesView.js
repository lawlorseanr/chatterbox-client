var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(room) {
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

      // if room is defined, we just want to filter exisitng list
      // if room is something other than null (and not naughty), add
      if ((room === undefined || room === 'Main') && data[i].roomname !== null) {
        Rooms.add(data[i].roomname);
      }

      if (room === undefined || room === 'Main') {
        // add everything
        var $newMessage = $(MessageView.render(data[i]));
        this.$chats.append($newMessage);
      } else if (data[i].roomname === room) {
        // add only room
        var $newMessage = $(MessageView.render(data[i]));
        this.$chats.append($newMessage);
      }

    }
  }

};