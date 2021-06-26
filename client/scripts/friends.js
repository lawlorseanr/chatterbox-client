var Friends = {

  _storage: new Set(),

  items: function() {
    return [...Friends._storage];
  },

  add: function(username) {
    Friends._storage.add(username);
  },

  isFriend: function(username) {
    return Friends._storage.has(username);
  },

  toggleStatus: function(username, callback = () => {}) {
    if (Friends.isFriend(username)) {
      Friends._storage.delete(username);
    } else {
      Friends.add(username);
    }
  }

};