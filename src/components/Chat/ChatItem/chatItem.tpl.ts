export const chatItem = `{{#each chatsList}}
<li class="chat-item" data-chat={{id}}>
{{#if avatar}}
    <img src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="avatar">
{{/if}}
<div class="chat-item__content">
    <div class="chat-item__content-header">
        <div class="chat-item__content-header-title">{{title}}</div>
        <div class="chat-item__content-header-date gray-text">{{last_message.time}}</div>
    </div>
    {{#if last_message}}<div class="chat-item__content-message gray-text">{{last_message.user.login}}: {{last_message.content}}</div>{{/if}}
</div></li>{{/each}}`;
