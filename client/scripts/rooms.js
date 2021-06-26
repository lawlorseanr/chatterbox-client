var Rooms = {

  roomList: new Set(),
  selected: 'Lobby',

  add: function(roomname) {
    roomList.add(roomname);
    Rooms.updateSelected(roomname);
  },

  updateSelected: function(roomname) {
    this.selected = roomname;
  },



};