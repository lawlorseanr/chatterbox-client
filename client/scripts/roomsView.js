var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  rooms: new Rooms(),

  initialize: function() {
    this.rooms.set('Main');
    var $room = $('<option>Main</option>');
    this.$select.prepend($room);

    search = window.location.search;
    search += 'roomname=' + 'Main';
    //window.location.search = search;
  },

  render: function(room) {
    var $room = $('<span>' + room + '</span>');
    this.$select.prepend($room);
  }

};
