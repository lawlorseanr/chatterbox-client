var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleAddRoom);

    Rooms.set('Main');
    var $room = $('<option>Main</option>');
    this.$select.prepend($room);
  },

  render: function(room) {
    this.$select.html('');
    for (var i = 0; i < Rooms.roomList.length; i++) {
      var $room = $('<option>' + Rooms.roomList[i] + '</option>');
      this.$select.prepend($room);
    }
  },

  handleAddRoom: function() {
    debugger;
    var newRoom = prompt('What is your name?');
    Rooms.add(newRoom);

    RoomsView.render();
  }

};
