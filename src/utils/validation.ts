const validationRules = new Map<string, any>([
    ['name-valid', (value: string) => !/^[А-ЯA-ZЁ][а-яёA-Za-z-]*$/g.test(value) && `латиница или кириллица,
первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).`],
    ['login-valid', (value: string) => !/^(?![0-9_-]+$)[A-Za-z0-9_-]{3,20}$/g.test(value)
    && `Логин должен быть от 3 до 20 символов, латиница, может содержать цифры,
но не состоять из них, без пробелов,
без спецсимволов (допустимы дефис и нижнее подчёркивание).`],
    ['email-valid', (value: string) => !/^[A-Za-z0-9\\._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g.test(value)
    && `Email должен быть латиница, может включать цифры и спецсимволы вроде дефиса
и подчёркивания, обязательно должна быть «собака» (@) и точка после неё,
но перед точкой обязательно должны быть буквы.`],
    ['password-valid', (value: string) => !/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/g.test(value)
    && 'Пароль должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.'],
    ['phone-valid', (value: string) => !/^\+?\d{10,15}$/g.test(value)
    && 'Телефон должен быть от 10 до 15 символов, состоит из цифр, может начинается с плюса.'],
    ['not-empty', (value: string) => !/.+/g.test(value)
    && 'не должно быть пустым'],
]);
export const validate = (value: string, rules: string[]) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const rule of rules) {
        const validationRuleHandler = validationRules.get(rule);
        if (validationRuleHandler !== undefined) {
            const resultValidation = validationRuleHandler(value);
            if (resultValidation) return resultValidation;
        }
    }
    return false;
};
