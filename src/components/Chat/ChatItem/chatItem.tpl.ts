export const chatItem = `<li class="chat-item">
{{> avatar}}
<div class="chat-item__content">
    <div class="chat-item__content-header">
        <div class="chat-item__content-header-title">{{chatName}}</div>
        <div class="chat-item__content-header-date gray-text">{{lastDate}}</div>
    </div>
    <div class="chat-item__content-message gray-text">{{message}}</div>
</div>
</li>`;
