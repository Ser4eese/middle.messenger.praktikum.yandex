export const tmpl = `<div class="profile">
<div class="profile__back">
    <a href="/"><span><img alt="icon" class="profile__back-button" src="send.svg" /></span></a>
</div>
    <div class="profile__container">
        <div class="profile__container-avatar">
            <img alt="icon" src="empty-avatar.svg" />
            {{user.first_name}}
        </div>
        <div class="profile__container-data">
            <div class="profile__item">
            <span class="profile__item-label">Почта</span> 
            <span class="profile__item-value">{{user.email}}</span>
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Логин</span> 
            <span class="profile__item-value">{{user.login}}</span>
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Имя</span> 
            <span class="profile__item-value">{{user.first_name}}</span>
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Фамилия</span> 
            <span class="profile__item-value">{{user.second_name}}</span>
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Имя в чате</span> 
            <span class="profile__item-value">{{user.display_name}}</span>
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Телефон</span> 
            <span class="profile__item-value">{{user.phone}}</span>
            </div>
        </div>
        <div class="profile__container-actions">
            <a href="/change-data" class="link profile-link"><div class="profile__container-actions_change">Изменить данные</div></a>
            <a href="/change-password" class="link profile-link"><div class="profile__container-actions_change">Изменить пароль</div></a>
            <a href="/login" class="link profile-link profile-link__exit"><div class="profile__container-actions_exit">Выйти</div></a>
        </div>
    </div>
</div>`;