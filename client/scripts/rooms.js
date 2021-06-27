var Rooms = {

  _storage: new Set(),
  selected: 'lobby',

  items: function() {
    return [...Rooms._storage];
  },

  isSelected: function(roomname = 'lobby') {
    return Rooms.selected === roomname;
  },

  add: function(roomname) {
    if (roomname !== undefined && roomname !== null) {
      Rooms._storage.add(roomname);
    }
  },

  update: function(messages, callback = () => {}) {
    messages.forEach(function(message) {
      Rooms.add(message.roomname);
    });

    callback(Rooms.items());
  }

};