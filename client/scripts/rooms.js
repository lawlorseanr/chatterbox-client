class Rooms {

  constructor() {
    this.roomList = [];
    this.currentRoom = null;
  }

  get() {
    return this.roomList;
  }

  add(roomname) {
    this.roomList.push(roomname);
  }

  set(roomname) {
    if (this.roomList.indexOf(roomname) <= 0) {
      this.add(roomname);
    }
    this.currentRoom = roomname;
  }

  getCurrent() {
    return this.currentRoom;
  }

}