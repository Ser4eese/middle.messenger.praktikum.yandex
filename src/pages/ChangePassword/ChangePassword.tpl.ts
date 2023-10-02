export const tmpl = `<div class="profile">
<div class="profile__back">
<a href="/profile"><span><img alt="icon" class="profile__back-button" src="send.svg" /></span></a>
</div>
    <Form class="profile__container">
        <div class="profile__container-avatar">
            <img alt="icon" src="empty-avatar.svg" />
            {{user.first_name}}
        </div>
        <div class="profile__container-data">
            <div class="profile__item">
            <span class="profile__item-label">Старый пароль</span>
            {{> profileInput placeholder="Введите пароль" name="oldPassword"}}
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Новый пароль</span> 
            {{> profileInput placeholder="Введите новый пароль" name="newPassword"}}
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Повторите новый пароль</span> 
            {{> profileInput placeholder="Повторите пароль" name="newPassword"}}
            </div>
        </div>
        <div class="profile__container-actions">
            {{> button text="Сохранить"}}
        </div>
    </Form>
</div>`;