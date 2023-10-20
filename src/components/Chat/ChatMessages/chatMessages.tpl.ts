export const tmpl = `<div class="chat-messages__header">
<div class="chat-messages__header-left">{{{avatar}}}{{name}}</div>
<img alt="icon" class="chats-lists__profile-arrow" src="settings.svg" />
</div>
<div class="chat-messages__content-container">
{{{messageCards}}}
</div>
<div class="chat-messages__footer">
{{{ chatInput }}}
<img alt="icon" src="send.svg" />   
</div>`;
