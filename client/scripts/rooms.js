var Rooms = {

  _storage: new Set(),
  selected: 'Main',

  items: function() {
    return [...Rooms._storage];
  },

  isSelected: function(roomname = 'Main') {
    return Rooms.selected === 'Main' || Rooms.selected === roomname;
  },

  add: function(roomname) {
    Rooms._storage.add(roomname);
  },

  update: function(messages, callback = () => {}) {
    messages.forEach(function(message) {
      Rooms.add(message.roomname);
    });

    callback(Rooms.items());
  }

};