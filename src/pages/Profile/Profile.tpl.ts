export const tmpl = `<div class="profile__back">
    <a href="/messenger">
        <span>
            <img alt="icon" class="profile__back-button" src="send.svg" />
        </span>
    </a>
</div>
    <div class="profile__container">
        <div class="profile__container-avatar">
            {{{ProfileAvatar}}}
            {{first_name}}
        </div>
        <div class="profile__container-data">
            <div class="profile__item">
            <span class="profile__item-label">Почта</span> 
            <span class="profile__item-value">{{email}}</span>
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Логин</span> 
            <span class="profile__item-value">{{login}}</span>
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Имя</span> 
            <span class="profile__item-value">{{first_name}}</span>
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Фамилия</span> 
            <span class="profile__item-value">{{second_name}}</span>
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Имя в чате</span> 
            <span class="profile__item-value">{{display_name}}</span>
            </div>
            <div class="profile__item">
            <span class="profile__item-label">Телефон</span> 
            <span class="profile__item-value">{{phone}}</span>
            </div>
        </div>
        <div class="profile__container-actions">
            {{{ChangeDataLink}}}
            {{{ChangePasswordLink}}}
            {{{ExitLink}}}
        </div>
    </div>`;
