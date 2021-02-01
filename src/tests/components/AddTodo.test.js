import React from 'react';
import { shallow } from 'enzyme';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import AddTodo from '../../components/AddTodo/AddTodo.component';

test('should test AddTodo component', () => {
    const wrapper = shallow(<AddTodo/>);
    expect(wrapper).toMatchSnapshot();
});

test('should test AddTodo component handler', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<AddTodo addTodo={onSubmitSpy}/>);
    const form = wrapper.find('div').find('form');
    const input = form.find('input');

    input.simulate('change', { target: { value: 'test' } });
    form.simulate('submit');
    expect(onSubmitSpy).toBeCalledWith({description: 'test',completed: false});
});


///////////////SNAPSHOT WITHOUT enzyme
// let container = null;
// beforeEach(() => {
//     // setup a DOM element as a render target
//     container = document.createElement("div");
//     document.body.appendChild(container);
// });

// afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });

// it("renders AddTodo component with or without a addTodo event", () => {
//     const onSubmitSpy = jest.fn();

//     act(() => {
//         render(<AddTodo addTodo={onSubmitSpy}/>, container);
//     });
//     expect(container.querySelector('div.addTodo')).toBeTruthy();
//     expect(container.querySelector('div.addTodo form')).toBeTruthy();
//     expect(container.querySelector('div.addTodo form input')).toBeTruthy();
//     expect(container.querySelector('div.addTodo form input').placeholder).toBe('Type to add new tasks');
//     expect(container.querySelector('div.addTodo form input').type).toBe('text');

//     const form = container.querySelector('div.addTodo form');
//     const input = container.querySelector('div.addTodo form input');
//     expect(input.value).toBe('');
// });