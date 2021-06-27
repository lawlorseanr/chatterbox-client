var Messages = {

  _storage: {},
  items: function() {
    return Object.values(Messages._storage);
  },

  add: function(message) {
    Messages._storage[message.message_id] = Messages.conform(message);
  },

  update: function(data, callback) {
    for (const message of data) {
      Messages.add(message);
    }
    callback(Messages.items());
  },

  conform: function(message) {
    var conformMessage = {};
    conformMessage.text = message.text || '';
    conformMessage.username = message.username || '';
    conformMessage.roomname = message.roomname || 'lobby';
    conformMessage.github = message.github_handle || '';
    conformMessage.date = message.created_at || 'Unknown';
    return conformMessage;
  }

};