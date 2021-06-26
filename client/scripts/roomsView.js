var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  singleRoom: false,

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
    RoomsView.$select.change(function(e) {
      if (this.value !== 'Main') {
        RoomsView.singleRoom = true;
      } else {
        RoomsView.singleRoom = false;
      }

      Rooms.set(this.value);
      MessagesView.render(this.value);
    });

    Rooms.set('Main');
    var $room = $('<option>Main</option>');
    RoomsView.$select.append($room);
  },

  render: function() {
    if (!RoomsView.singleRoom) {
      RoomsView.$select.html('');
      for (var i = 0; i < Rooms.roomList.length; i++) {
        var $room = $('<option>' + Rooms.roomList[i] + '</option>');
        RoomsView.$select.append($room);
      }
    }
  },

  handleAddRoom: function() {
    var newRoom = prompt('New Room Name:');
    Rooms.add(newRoom);
    var $room = $('<option>' + newRoom + '</option>');
    RoomsView.$select.append($room);
    RoomsView.$select[0].selectedIndex = RoomsView.$select[0].childElementCount - 1;

    RoomsView.singleRoom = true;
    Rooms.set(newRoom);
    MessagesView.render(Rooms.currentRoom);
  }

};
