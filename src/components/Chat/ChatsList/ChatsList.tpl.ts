export const tmpl = `<div class="chats-lists">
<a href="/profile">
<div class="chats-lists__profile gray-text">Профиль 
<img alt="icon" class="chats-lists__profile-arrow" src="arrow.svg" />
</div>
</a>
<div class="chats-lists__search">{{> chatInput
    name="search"
    type="text"
    text="Поиск"
    required=false}}</div>
<ul class="chats-lists__items">
{{#each chatList}}
{{> chatItem this}}
{{/each}}
</ul>
</div>`;
