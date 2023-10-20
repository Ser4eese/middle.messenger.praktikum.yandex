export const tmpl = `<div class="profile__back">
<a href="/profile"><span><img alt="icon" class="profile__back-button" src="send.svg" /></span></a>
</div>
    <Form class="profile__container">
        <div class="profile__container-avatar">
            <img alt="icon" src="empty-avatar.svg" />
            {{user.first_name}}
        </div>
        <div class="profile__container-data">
            {{{profileInput}}}
        </div>
        <div class="profile__container-actions">
            {{{button}}}
        </div>
    </Form>`;
