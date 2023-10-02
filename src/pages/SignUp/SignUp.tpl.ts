//language=javascript
export const tmpl = `<div class="register-container">
<form action="" method="get" class="register-form">
    <h2 class="login-form__title">Регистрация</h2>
    <div class="login-form__input">
      {{> input
      name="email"
      type="text"
      title="Почта"
      required=true
      }}
        {{> input
        name="login"
        type="text"
        title="Логин"
        required=true
        }}
        {{> input
            name="first_name"
            type="text"
            title="Имя"
            required=true
        }}
        {{> input
                name="second_name"
                type="text"
                title="Фамилия"
                required=true
        }}
        {{> input
            name="phone"
            type="text"
            title="Телефон"
            required=true
        }}
        {{> input
            name="password"
            type="password"
            title="Пароль"
            required=true
        }}
        {{> input
            name="password"
            type="password"
            title="Пароль (ещё раз)"
            required=true
         }}
      </div>
      <div class="login-form__action">
      <a href="/">{{> button text="Зарегистироваться" }}</a>
      <a href="/login" class="link">Войти</a>
      </div>
</form></div>`;