export const popup = `<div class="popup  {{#if popupType}}popup__active{{/if}}">
<div class="popup-overlay">
  <div class="popup-content">
    <div class="popup-close">
      {{{closeButton}}}
    </div>
    {{#if (eq popupType "createChat")}}
      {{{popupContent}}}
    {{/if}}
    {{#if (eq popupType "addUser")}}
      {{{addUser}}}
    {{/if}}
    {{#if (eq popupType "deleteUser")}}
    {{{deleteUser}}}
  {{/if}}
  </div>
</div>
</div>`;
