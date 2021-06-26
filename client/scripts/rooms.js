var Rooms = {

  roomList: [],
  currentRoom: null,

  get: function() {
    return this.roomList;
  },

  add: function(roomname) {
    if (this.roomList.indexOf(roomname) < 0) {
      this.roomList.push(roomname);
    }
  },

  set: function(roomname) {
    if (this.roomList.indexOf(roomname) <= 0) {
      this.add(roomname);
    }
    this.currentRoom = roomname;
  },

  getCurrent: function() {
    return this.currentRoom;
  }

};