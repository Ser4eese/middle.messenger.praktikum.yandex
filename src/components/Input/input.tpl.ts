export const input = `
<div class="input">
<label class="input__label">{{title}}</label>
<input class="input__field" 
type="{{type}}" 
name="{{name}}"
{{#if required}}required{{/if}} />
</div>`;