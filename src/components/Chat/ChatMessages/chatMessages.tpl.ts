export const tmpl = `<div class="chat-messages">
<div class="chat-messages__header">
<div class="chat-messages__header-left">{{> avatar}}{{name}}</div>
<img alt="icon" class="chats-lists__profile-arrow" src="settings.svg" />
</div>
<div class="chat-messages__content">
{{#each messageList}}
{{> messageCard this}}
{{/each}}
</div>
<div class="chat-messages__footer">
{{> chatInput
    name="message"
    type="text"
    text="Сообщение"
    required=false}}
<img alt="icon" src="send.svg" />   
</div>
</div>`;