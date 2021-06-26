var Messages = {

  _storage: {},
  items: function() {
    return Object.values(Messages._storage);
  },

  add: function(message, callback = () => {}) {
    Messages._storage[message.message_id] = Messages.conform(message);
    callback(Messages.items());
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
    conformMessage.roomname = message.roomname || 'Main';
    conformMessage.github = message.github_handle || '';
    conformMessage.created_at = message.created_at || 'Unknown';
    return conformMessage;
  }

};