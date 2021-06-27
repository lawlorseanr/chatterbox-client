var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);

    Rooms.add('lobby');
  },

  render: function(data) {
    RoomsView.$select.html('');
    data.forEach(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomname) {
    var $option = $('<option>')
      .val(roomname)
      .text(roomname);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render(Messages.items());
  },

  handleClick: function() {
    var roomname = prompt('New Room Name:');
    if (roomname) {
      debugger;
      Rooms.add(roomname);
      Rooms.selected = roomname;
      RoomsView.render(Rooms.items());
      MessagesView.render(Messages.items());
    }
  },

};
