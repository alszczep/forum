import { validate, MIN_CHARACTERS, errorTexts } from './../src/modules/validate';

describe('validate function', () => {
    describe('userName', () => {
        it('#1', () => {
            expect(validate({type: 'userName', newValue: 'a'.repeat(MIN_CHARACTERS.userName - 1)})).toStrictEqual({ passed: false, error: [errorTexts.userName.length]});
        })
        it('#2', () => {
            expect(validate({type: 'userName', newValue: ''})).toStrictEqual({ passed: false, error: [errorTexts.userName.length]});
        })
        it('#3', () => {
            expect(validate({type: 'userName', newValue: 'a'.repeat(MIN_CHARACTERS.userName)})).toStrictEqual({ passed: true});
        })
        it('#4', () => {
            expect(validate({type: 'userName', newValue: 'a'.repeat(MIN_CHARACTERS.userName + 1)})).toStrictEqual({ passed: true});
        })
    });
    describe('email', () => {
        it('#1', () => {
            expect(validate({type: 'email', newValue: 'a'.repeat(MIN_CHARACTERS.email - 1)})).toStrictEqual({ passed: false, error: [errorTexts.email.length, errorTexts.email.correctness]});
        })
        it('#2', () => {
            expect(validate({type: 'email', newValue: ''})).toStrictEqual({ passed: false, error: [errorTexts.email.length, errorTexts.email.correctness]});
        })
        it('#3', () => {
            expect(validate({type: 'email', newValue: 'a'.repeat(MIN_CHARACTERS.email)})).toStrictEqual({ passed: false, error: [errorTexts.email.correctness]});
        })
        it('#4', () => {
            expect(validate({type: 'email', newValue: 'a'.repeat(MIN_CHARACTERS.email + 1)})).toStrictEqual({ passed: false, error: [errorTexts.email.correctness]});
        })
        it('#5', () => {
            expect(validate({type: 'email', newValue: `${'a'.repeat(MIN_CHARACTERS.email)}@${'a'.repeat(MIN_CHARACTERS.email)}.com`})).toStrictEqual({ passed: true});
        })
        it('#6', () => {
            let temp = MIN_CHARACTERS.email;
            MIN_CHARACTERS.email = 6;
            expect(validate({type: 'email', newValue: 'a@a.co'})).toStrictEqual({ passed: true});
            MIN_CHARACTERS.email = temp;
        })
        it('#7', () => {
            let temp = MIN_CHARACTERS.email;
            MIN_CHARACTERS.email = 7;
            expect(validate({type: 'email', newValue: 'a@a.co'})).toStrictEqual({ passed: false, error: [errorTexts.email.length]});
            MIN_CHARACTERS.email = temp;
        })
    });
    describe('password', () => {
        it('#1', () => {
            expect(validate({type: 'password', newValue: `aA${'1'.repeat(MIN_CHARACTERS.password - 3)}`})).toStrictEqual({ passed: false, error: [errorTexts.password.length]});
        })
        it('#2', () => {
            expect(validate({type: 'password', newValue: ''})).toStrictEqual({ passed: false, error: [errorTexts.password.length, errorTexts.password.correctness]});
        })
        it('#3', () => {
            expect(validate({type: 'password', newValue: `aA${'1'.repeat(MIN_CHARACTERS.password - 2)}`})).toStrictEqual({ passed: true});
        })
        it('#4', () => {
            expect(validate({type: 'password', newValue: `aA${'1'.repeat(MIN_CHARACTERS.password - 1)}`})).toStrictEqual({ passed: true});
        })
        it('#5', () => {
            expect(validate({type: 'password', newValue: `A${'1'.repeat(MIN_CHARACTERS.password)}`})).toStrictEqual({ passed: false, error: [errorTexts.password.correctness]});
        })
        it('#6', () => {
            expect(validate({type: 'password', newValue: `a${'1'.repeat(MIN_CHARACTERS.password)}`})).toStrictEqual({ passed: false, error: [errorTexts.password.correctness]});
        })
        it('#7', () => {
            expect(validate({type: 'password', newValue: `A${'a'.repeat(MIN_CHARACTERS.password)}`})).toStrictEqual({ passed: false, error: [errorTexts.password.correctness]});
        })
    });
    describe('password repeat', () => {
        it('#1', () => {
            expect(validate({type: 'passwordRepeat', newValue: 'a'.repeat(MIN_CHARACTERS.password), passwordValue: 'a'.repeat(MIN_CHARACTERS.password)})).toStrictEqual({ passed: true});
        })
        it('#2', () => {
            expect(validate({type: 'passwordRepeat', newValue: 'a'.repeat(MIN_CHARACTERS.password), passwordValue: 'a'.repeat(MIN_CHARACTERS.password + 1)})).toStrictEqual({ passed: false, error: [errorTexts.passwordRepeat.correctness]});
        })
        it('#3', () => {
            expect(validate({type: 'passwordRepeat', newValue: 'a'.repeat(MIN_CHARACTERS.password + 1), passwordValue: 'Aa'.repeat(MIN_CHARACTERS.password)})).toStrictEqual({ passed: false, error: [errorTexts.passwordRepeat.correctness]});
        })
    });
});