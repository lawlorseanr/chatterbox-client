var MessageView = {

  render: _.template(`
      <div class="chat<%- Friends.isFriend(github) ? ' friend' : '' %>">
        <div class="username" data-username="<%- github %>">
          <%- username %> (<%- github %>):
        </div>
        <div class="messageText"><%- text %></div>
        <div class="timestamp"><%- date %></div>
      </div>
    `),
};