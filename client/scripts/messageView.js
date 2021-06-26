var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %> (<%= github_handle %>):</div>
        <div class="messageText"><%= text %></div>
        <div class="timestamp"><%= created_at %></div>
      </div>
    `),

  fancyrender: _.template(`
  <div class="chat fancychat">
    <div class="username"><%= username %> (<%= github_handle %>):</div>
    <div class="messageText"><%= text %></div>
    <div class="timestamp"><%= created_at %></div>
  </div>
  `)

};