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
                <span class="profile__item-label">Почта</span>
                {{#with user.email as | placeholder |}}
                    {{> profileInput placeholder=placeholder name="email"}}
                {{/with}}
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Логин</span> 
            {{#with user.login as | placeholder |}}
            {{> profileInput placeholder=placeholder name="login"}}
            {{/with}}
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Имя</span> 
            {{#with user.first_name as | placeholder |}}
            {{> profileInput placeholder=placeholder name="first_name"}}
            {{/with}}
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Фамилия</span> 
            {{#with user.second_name as | placeholder |}}
            {{> profileInput placeholder=placeholder name="second_name"}}
            {{/with}}
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Имя в чате</span> 
            {{#with user.display_name as | placeholder |}}
            {{> profileInput placeholder=placeholder name="display_name"}}
            {{/with}}
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Телефон</span> 
            {{#with user.phone as | placeholder |}}
            {{> profileInput placeholder=placeholder name="phone"}}
            {{/with}}
            </div>
        </div>
        <div class="profile__container-actions">
            {{> button text="Сохранить"}}
        </div>
    </Form>
</div>`;