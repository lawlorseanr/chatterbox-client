var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %> (<%= github_handle %>):</div>
        <div class="messageText"><%= text %></div>
        <div class="timestamp"><%= created_at %></div>
      </div>
    `)

};