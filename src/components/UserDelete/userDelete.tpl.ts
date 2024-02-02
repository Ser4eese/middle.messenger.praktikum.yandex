export const userDeleteTmpl = `<div>Удалить пользователя</div>
<div class="add-user">
{{#each users}}
<div class="add-user__card" data-user-id={{id}}>Удалить {{login}}
</div>
{{/each}}
</div>`;
