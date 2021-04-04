import { convertStringToLi } from './../src/modules/convert-string-to-li';

describe('string to li conversion', () => {
    it('#1', () => {
        expect(convertStringToLi({passed: true})).toStrictEqual([]);
    })
    it('#2', () => {
        const result = convertStringToLi({passed: false, error: ['error1']});
        expect([result[0].type, result[0].props.children]).toStrictEqual(['li', 'error1']);
    })
    it('#2', () => {
        const result = convertStringToLi({passed: false, error: ['error1','error2']});
        expect([[result[0].type, result[0].props.children], [result[1].type, result[1].props.children]]).toStrictEqual([['li', 'error1'], ['li', 'error2']]);
    })
});