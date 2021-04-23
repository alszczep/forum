import React from 'react';
import { shallow } from 'enzyme';
import Account from './../../src/components/Account';
import { UserDataInterface } from '../../src/interfaces/UserDataInterface';

const exampleUser: UserDataInterface = {
    id: 'qwertyzxcvb',
    userName: 'user1',
    email: 'user1@example.com'
}

describe("Account component", () => {
    it("should render main element with classes main and account", () => {
        const wrapper = shallow(<Account userData={exampleUser}/>);
        const mainElement = wrapper.find('main.main.account');
        expect(mainElement.exists()).toBe(true);
    })
    it("should render username and email headers", () => {
        const wrapper = shallow(<Account userData={exampleUser}/>);
        const usernameHeader = wrapper.find('.account__header.account__header--username')
        expect(usernameHeader.exists()).toBe(true);
        expect(usernameHeader.text()).toBe(`Hi, ${exampleUser.userName}`);
        const emailHeader = wrapper.find('.account__header.account__header--email')
        expect(emailHeader.exists()).toBe(true);
        expect(emailHeader.text()).toBe(`Your current email: ${exampleUser.email}`);
    })
})