export const messageCard = `{{#each messages}}<div class="message message{{#if isAuthor}}__left{{else}}__right{{/if}}">
<div class="message-card message-card{{#if isAuthor}}__is-author{{else}}__is-opponent{{/if}}">
{{text}}
<span class="message-card__date">{{date}}</span>
</div>
</div>{{/each}}`;
