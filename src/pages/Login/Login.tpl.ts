//language=javascript
export const tmpl = `<div class="login-container">
<form action="" method="get" class="login-form">
    <h2 class="login-form__title">Вход</h2>
    <div class="login-form__input">
      {{> input
      name="login"
      type="text"
      title="Логин"
      required=true
      }}
        {{> input
        name="password"
        type="password"
        title="Пароль"
        required=true
        }}
      </div>
      <div class="login-form__action">
      <a href="/">{{> button text="Авторизоваться" }}</a>
      <a href="/signUp" class="link">Нет аккаунта?</a>
      </div>
</form>
</div>`;