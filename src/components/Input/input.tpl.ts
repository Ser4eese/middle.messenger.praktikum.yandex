export const input = `
<label class="input__label">{{title}}</label>
<input class="input__field" 
type="{{type}}" 
name="{{name}}"
value="{{value}}"
{{#if required}}required{{/if}} />
{{#if error}}<div title="{{error}}" class="error-field">Ошибка<img width="20px" alt="icon" src="info.svg" /></div>{{/if}}`;
