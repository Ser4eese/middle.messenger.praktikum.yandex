export const profileInput = `
<div class="profile-input">
<label class="profile-input__label">{{title}}</label>
<input class="profile-input__field" 
type="{{type}}" 
name="{{name}}"
placeholder="{{placeholder}}"
{{#if required}}required{{/if}} />
</div>`;
