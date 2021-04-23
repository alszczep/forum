import { validate, MIN_CHARACTERS, errorTexts } from '../../src/modules/validate';

describe('validate function', () => {
    it('userName', () => {
        expect(validate({type: 'userName', newValue: 'a'.repeat(MIN_CHARACTERS.userName - 1)})).toStrictEqual({ passed: false, error: [errorTexts.userName.length]});
        expect(validate({type: 'userName', newValue: ''})).toStrictEqual({ passed: false, error: [errorTexts.userName.length]});
        expect(validate({type: 'userName', newValue: 'a'.repeat(MIN_CHARACTERS.userName)})).toStrictEqual({ passed: true});
        expect(validate({type: 'userName', newValue: 'a'.repeat(MIN_CHARACTERS.userName + 1)})).toStrictEqual({ passed: true});
        expect(validate({type: 'userName', newValue: '@'.repeat(MIN_CHARACTERS.userName + 1)})).toStrictEqual({ passed: false, error: [errorTexts.userName.correctness]});
        expect(validate({type: 'userName', newValue: '@'.repeat(MIN_CHARACTERS.userName - 1)})).toStrictEqual({ passed: false, error: [errorTexts.userName.correctness, errorTexts.userName.length]});
        expect(validate({type: 'userName', newValue: `a ${'a'.repeat(MIN_CHARACTERS.userName)}`})).toStrictEqual({ passed: false, error: [errorTexts.userName.correctness]});
        expect(validate({type: 'userName', newValue: `a${'a'.repeat(MIN_CHARACTERS.userName)}  `})).toStrictEqual({ passed: false, error: [errorTexts.userName.correctness]});
    });
    it('email', () => {
        expect(validate({type: 'email', newValue: 'a'.repeat(MIN_CHARACTERS.email - 1)})).toStrictEqual({ passed: false, error: [errorTexts.email.length, errorTexts.email.correctness]});
        expect(validate({type: 'email', newValue: ''})).toStrictEqual({ passed: false, error: [errorTexts.email.length, errorTexts.email.correctness]});
        expect(validate({type: 'email', newValue: 'a'.repeat(MIN_CHARACTERS.email)})).toStrictEqual({ passed: false, error: [errorTexts.email.correctness]});
        expect(validate({type: 'email', newValue: 'a'.repeat(MIN_CHARACTERS.email + 1)})).toStrictEqual({ passed: false, error: [errorTexts.email.correctness]});
        expect(validate({type: 'email', newValue: `${'a'.repeat(MIN_CHARACTERS.email)}@${'a'.repeat(MIN_CHARACTERS.email)}.com`})).toStrictEqual({ passed: true});

        let temp1 = MIN_CHARACTERS.email;
        MIN_CHARACTERS.email = 6;
        expect(validate({type: 'email', newValue: 'a@a.co'})).toStrictEqual({ passed: true});
        MIN_CHARACTERS.email = temp1;

        let temp2 = MIN_CHARACTERS.email;
        MIN_CHARACTERS.email = 7;
        expect(validate({type: 'email', newValue: 'a@a.co'})).toStrictEqual({ passed: false, error: [errorTexts.email.length]});
        MIN_CHARACTERS.email = temp2;
    });
    it('password', () => {
        expect(validate({type: 'password', newValue: `aA${'1'.repeat(MIN_CHARACTERS.password - 3)}`})).toStrictEqual({ passed: false, error: [errorTexts.password.length]});
        expect(validate({type: 'password', newValue: ''})).toStrictEqual({ passed: false, error: [errorTexts.password.length, errorTexts.password.correctness]});
        expect(validate({type: 'password', newValue: `aA${'1'.repeat(MIN_CHARACTERS.password - 2)}`})).toStrictEqual({ passed: true});
        expect(validate({type: 'password', newValue: `aA${'1'.repeat(MIN_CHARACTERS.password - 1)}`})).toStrictEqual({ passed: true});
        expect(validate({type: 'password', newValue: `A${'1'.repeat(MIN_CHARACTERS.password)}`})).toStrictEqual({ passed: false, error: [errorTexts.password.correctness]});
        expect(validate({type: 'password', newValue: `a${'1'.repeat(MIN_CHARACTERS.password)}`})).toStrictEqual({ passed: false, error: [errorTexts.password.correctness]});
        expect(validate({type: 'password', newValue: `A${'a'.repeat(MIN_CHARACTERS.password)}`})).toStrictEqual({ passed: false, error: [errorTexts.password.correctness]});
    });
    it('password repeat', () => {
        expect(validate({type: 'passwordRepeat', newValue: 'a'.repeat(MIN_CHARACTERS.password), passwordValue: 'a'.repeat(MIN_CHARACTERS.password)})).toStrictEqual({ passed: true});
        expect(validate({type: 'passwordRepeat', newValue: 'a'.repeat(MIN_CHARACTERS.password), passwordValue: 'a'.repeat(MIN_CHARACTERS.password + 1)})).toStrictEqual({ passed: false, error: [errorTexts.passwordRepeat.correctness]});
        expect(validate({type: 'passwordRepeat', newValue: 'a'.repeat(MIN_CHARACTERS.password + 1), passwordValue: 'Aa'.repeat(MIN_CHARACTERS.password)})).toStrictEqual({ passed: false, error: [errorTexts.passwordRepeat.correctness]});
    });
});