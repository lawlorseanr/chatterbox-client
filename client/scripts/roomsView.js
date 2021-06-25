var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function(room) {
    var $room = $('<span>' + room + '</span>');
    this.$select.append($room);
  }

};
