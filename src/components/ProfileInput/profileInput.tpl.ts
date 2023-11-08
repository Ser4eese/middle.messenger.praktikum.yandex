export const profileInput = `<span class="profile__item-label">{{label}}</span>
<div class="profile-input">
<label class="profile-input__label">{{title}}</label>
<input class="profile-input__field {{#if error}}profile-input__field_error{{/if}}" 
type="{{type}}" 
name="{{name}}"
placeholder="{{placeholder}}"
value="{{value}}"
{{#if required}}required{{/if}} />
{{#if error}}<div title="{{error}}" class="error-field">Ошибка<img width="20px" alt="icon" src="info.svg" /></div>{{/if}}
</div>`;
