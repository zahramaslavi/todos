import React from 'react';
import { shallow } from 'enzyme';
import TodoFilter from '../../components/TodoFilter/TodoFilter.component';

test('should test TodoFilter component snapshot', () => {
    const wrapper = shallow(<TodoFilter/>);
    expect(wrapper).toMatchSnapshot();
});

test('should test TodoFilter component snapshot with todoCount', () => {
    const wrapper = shallow(<TodoFilter todoCount={4}/>);
    expect(wrapper).toMatchSnapshot();
});

//todoCount, hideCompleted, toggleHideCompleted
test('should test TodoFilter component snapshot with todoCount and hideCompleted', () => {
    const wrapper = shallow(<TodoFilter todoCount={4} hideCompleted={true}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should test TodoFilter component with toggleHideCompleted event', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
        <TodoFilter 
            todoCount={4} 
            hideCompleted={true}
            toggleHideCompleted={onSubmitSpy}
        />);

    const toggleCheckbox = wrapper.find('input[type="checkbox"]');
    toggleCheckbox.simulate('change');
    expect(onSubmitSpy).toHaveBeenCalled();
        
});