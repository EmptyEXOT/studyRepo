import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input, { InputVariant } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    label: 'input smth',
    variant: InputVariant.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    label: 'input smth',
    variant: InputVariant.OUTLINED,
};
