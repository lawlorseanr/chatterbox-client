var MessagesView = {

  $chats: $('#chats'),
  friend: undefined,

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

      if (MessagesView.friend === undefined || data[i].github_handle !== MessagesView.friend) {
        var renderfn = MessageView.render;
      } else {
        var renderfn = MessageView.fancyrender;
      }

      if (!RoomsView.singleRoom) {
        // add everything
        var $newMessage = $(renderfn(data[i]));
        this.$chats.append($newMessage);
      } else if (data[i].roomname === room) {
        // add only room
        var $newMessage = $(renderfn(data[i]));
        this.$chats.append($newMessage);
      }
    }
    $('.chat').on('click', function() {
      var rawUser = $(this).children()[0].textContent;
      var firstParen = rawUser.indexOf(' (') + 2;
      var lastParen = rawUser.indexOf('):');
      var user = rawUser.substr(firstParen, lastParen - firstParen);
      if (MessagesView.friend !== user) {
        MessagesView.friend = user;
      } else {
        MessagesView.friend = undefined;
      }
      MessagesView.render(Rooms.currentRoom);
    });
  }

};