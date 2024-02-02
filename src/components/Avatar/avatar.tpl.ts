export const avatar = `
<input id="change_avatar" type="file" accept="image/*" name="avatar" class="profile-avatar__input">
<label for="change_avatar" class="profile-avatar__label">{{#if url}}<img alt="icon" src="https://ya-praktikum.tech/api/v2/resources{{url}}" class="profile-avatar__img" />{{else}}<div  for="change_avatar" class="avatar"></div>{{/if}}</label>
`;
