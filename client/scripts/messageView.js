var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %></div>
        <div class="messagetext"><%= text %></div>
      </div>
    `)

};

//{/* <div class="timestamp"><%= date %></div< */}