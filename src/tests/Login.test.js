import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/Login';

describe('testing login',() =>{
    let wrapper;
    test('username check',()=> {
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: ''}});
        expect(wrapper.state('username')).toEqual('');
    })
    it('password check',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: ''}});
        expect(wrapper.state('password')).toEqual('');
    })
    it('login check with right data',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: ''}});
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: ''}});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLogined')).toBe(true);
    })
    it('login check with wrong data',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: ''}});
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: ''}});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLogined')).toBe(false);
    })
})