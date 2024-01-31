export const tmpl = `{{#if selectedChat}}<div class="chat-messages__header">
<div class="chat-messages-header-left">{{{avatar}}}{{chat.title}}</div>
<div class="chat-messages-header-button">
<div class="chat-messages-header-button-action">
  <img alt="icon" src="settings.svg">
  <div class="chat-messages-header-list">
    <div>
    {{{addUser}}}
    </div>
    <div>
    {{{addUser}}}
    </div>
    <div>
    {{{deleteUser}}}
    </div>
  </div>
</div>
</div>
</div>
{{{messageCards}}}
<form class="chat-messages__footer">
{{{ chatInput }}}
{{{ buttonIcon }}}
</form>
{{/if}}`;
