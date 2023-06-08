import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import storeProvider from 'app/providers/StoreProvider/ui/StoreProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import Navbar from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Auth = Template.bind({});
Auth.args = {};
Auth.decorators = [
    StoreDecorator({
        user: { authData: { id: '', name: 'admin' } },
    }),
];
