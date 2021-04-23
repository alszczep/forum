import { convertStringToLi } from '../../src/modules/convert-string-to-li';

it('string to li conversion', () => {
    expect(convertStringToLi({passed: true})).toStrictEqual([]);
    
    const result1 = convertStringToLi({passed: false, error: ['error1']});
    expect([result1[0].type, result1[0].props.children]).toStrictEqual(['li', 'error1']);

    const result2 = convertStringToLi({passed: false, error: ['error1','error2']});
    expect([[result2[0].type, result2[0].props.children], [result2[1].type, result2[1].props.children]]).toStrictEqual([['li', 'error1'], ['li', 'error2']]);
});