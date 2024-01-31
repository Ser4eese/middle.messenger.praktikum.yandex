export const userEditTmpl = `<div>Добавить пользователя</div>
<form action="" method="get">
{{{input}}}
{{{button}}}
<div class="add-user">
{{#each users}}
<div class="add-user__card" data-user-id={{id}}>Добавить {{login}}
</div>
{{/each}}
</div>
</form>`;
